const Jimp = require('jimp');
const fs = require('fs');
const https = require('https');

const d = new Date();
d.setDate(d.getDate()-1);

const DATE = `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

console.log(`Generating cloud maps for ${DATE}`);

const SOURCE_WIDTH = 16384;
const SOURCE_HEIGHT = SOURCE_WIDTH/2;

const OUTPUT_DIR = './out';
const TEMP_DIR = './tmp';

const imagesToLoad = [
  {
    type: 'EARTH_WITH_CLOUDS',
    path: `https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?version=1.3.0&service=WMS&request=GetMap&format=image/png&STYLE=default&bbox=-90,-180,90,180&CRS=EPSG:4326&WIDTH=${SOURCE_WIDTH}&HEIGHT=${SOURCE_HEIGHT}&TIME=${DATE}&layers=VIIRS_NOAA20_CorrectedReflectance_TrueColor`,
    loaded: false,
    imageData: null
  },
  {
    type: 'CLOUD_CONFIDENCE',
    path: `https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?version=1.3.0&service=WMS&request=GetMap&format=image/png&STYLE=default&bbox=-90,-180,90,180&CRS=EPSG:4326&WIDTH=${SOURCE_WIDTH}&HEIGHT=${SOURCE_HEIGHT}&TIME=${DATE}&layers=VIIRS_NOAA20_Clear_Sky_Confidence_Day`,
    loaded: false,
    imageData: null
  },
  {
    type: 'POLES_OVERLAY',
    path: 'static_images/poles-overlay.png',
    loaded: false,
    imageData: null
  },
  {
    type: 'EARTH_WITHOUT_CLOUDS',
    path: 'static_images/earth.png',
    loaded: false,
    imageData: null
  },
  {
    type: 'EARTH_WITHOUT_CLOUDS_NIGHT',
    path: 'static_images/earth-night.png',
    loaded: false,
    imageData: null
  },
  {
    type: 'SPECULAR_BASE',
    path: 'static_images/specular-base.png',
    loaded: false,
    imageData: null
  }
];

imagesToLoad.forEach((img) => loadImage(img));

function loadImage(img) {
  console.log(`Loading ${img.type} from '${img.path}'...`)

  if(img.path.startsWith('https://')) {
    // Download image from URL
    https.get(img.path,(res) => {
      console.log(`Downloaded ${img.type} from '${img.path}'`);

      if (!fs.existsSync(TEMP_DIR)){
        fs.mkdirSync(TEMP_DIR, { recursive: true });
      }

      const path = `${TEMP_DIR}/${img.type}.png`;
      const filePath = fs.createWriteStream(path);

      res.pipe(filePath);
      filePath.on('finish',() => {
        filePath.close();

        // Read image to memory
        Jimp.read(path)
          .then(imgData => {
            img.imageData = imgData;
            img.loaded = true;
            checkIfAllLoaded(img);
          })
          .catch(err => {
            console.error(err);
          });
      })
    })
  } else {
    // Read image from disk
    Jimp.read(img.path)
      .then(imgData => {
        img.imageData = imgData;
        img.loaded = true;
        checkIfAllLoaded(img);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

function imageDataForType(type) {
  return imagesToLoad.find(i => i.type === type).imageData;
}

function checkIfAllLoaded(img) {
  console.log(`Finished loading ${img.type} from '${img.path}'`)
  // Return if there are any images which haven't loaded
  if(imagesToLoad.findIndex(i => !i.loaded) !== -1) {
    return;
  }

  console.log('All images loaded');
  processImages();
}

function interpolate(fromA, toA, fromB, toB, input) {
  const proportionOfRange = (input - fromA) / (toA - fromA);
  return fromB + (toB - fromB) * proportionOfRange;
}

function processImages() {
  const earthWithClouds = imageDataForType('EARTH_WITH_CLOUDS');
  const cloudConfidence = imageDataForType('CLOUD_CONFIDENCE');
  const polesOverlay = imageDataForType('POLES_OVERLAY');
  const earthWithoutClouds = imageDataForType('EARTH_WITHOUT_CLOUDS');
  const earthWithoutCloudsNight = imageDataForType('EARTH_WITHOUT_CLOUDS_NIGHT');
  const specularBase = imageDataForType('SPECULAR_BASE');

  // For each pixel, if the cloud data is black make the earth image pixel black
  console.log('Creating cloud map');
  const cloudMap = earthWithClouds.clone().grayscale();

  cloudMap.scan(0, 0, cloudMap.bitmap.width, cloudMap.bitmap.height, function(x, y, idx) {
    // Confidence is in the red channel, 127 to 255
    const r = cloudConfidence.bitmap.data[idx];
    let confidence = 0;

    if(r > 0) {
      confidence = interpolate(127, 255, 0, 1, cloudConfidence.bitmap.data[idx]);
    }

    this.bitmap.data[idx] = this.bitmap.data[idx] * confidence;
    this.bitmap.data[idx + 1] = this.bitmap.data[idx];
    this.bitmap.data[idx + 2] = this.bitmap.data[idx];
  });

  // Downscale to anti-alias and add poles overlay
  cloudMap
    .resize(SOURCE_WIDTH/2, SOURCE_HEIGHT/2, Jimp.RESIZE_HERMITE)
    .composite(polesOverlay.resize(cloudMap.bitmap.width, cloudMap.bitmap.height), 0, 0);

  // Create version with alpha channel
  const cloudMapWithAlpha = cloudMap.clone();

  cloudMapWithAlpha.scan(0, 0, cloudMapWithAlpha.bitmap.width, cloudMapWithAlpha.bitmap.height, function(x, y, idx) {
    // Copy red value to alpha value (we're greyscale so r, g and b will all be identical)
    this.bitmap.data[idx + 3] = this.bitmap.data[idx]

    // Set colour to white
    this.bitmap.data[idx] = 255;
    this.bitmap.data[idx + 1] = 255;
    this.bitmap.data[idx + 2] = 255;
  });


  // Save the cloud map
  console.log('Saving cloud map image');
  saveImageResolutions(cloudMap, 'clouds', ['jpg']);

  // Save the cloud map with alpha
  console.log('Saving cloud map with alpha image');
  saveImageResolutions(cloudMapWithAlpha.colorType(4), 'clouds-alpha', ['png']);

  // Save the earth image
  console.log('Saving earth image');
  earthWithoutClouds
    .resize(cloudMap.bitmap.width, cloudMap.bitmap.height, Jimp.RESIZE_HERMITE)
    .composite(cloudMapWithAlpha, 0, 0,  {
      opacitySource: 1,
      opacityDest: 1
    });

  saveImageResolutions(earthWithoutClouds, 'earth', ['jpg']);

  const invertedCloudMap = cloudMapWithAlpha.clone().invert();

  // Save the night earth image
  console.log('Saving night earth image');
  earthWithoutCloudsNight
    .resize(cloudMap.bitmap.width, cloudMap.bitmap.height, Jimp.RESIZE_HERMITE)
    .composite(invertedCloudMap, 0, 0,  {
      mode: Jimp.BLEND_MULTIPLY,
      opacitySource: 1,
      opacityDest: 1
    });

  saveImageResolutions(earthWithoutCloudsNight, 'earth-night', ['jpg']);

  // Save the specular map
  console.log('Saving specular map image');
  specularBase
    .resize(cloudMap.bitmap.width, cloudMap.bitmap.height, Jimp.RESIZE_HERMITE)
    .composite(invertedCloudMap, 0, 0,  {
      mode: Jimp.BLEND_MULTIPLY,
      opacitySource: 1,
      opacityDest: 1
    });

  saveImageResolutions(specularBase, 'specular', ['jpg']);
}

function saveImageResolutions(image, filename, formats) {
  if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  formats.forEach(format => {
    for(let i = 1; i < 5; i++) {
      const scale = 2**i;
      const width = SOURCE_WIDTH/scale;
      const height = SOURCE_HEIGHT/scale;
      const clone = image.clone();

      clone
        .resize(SOURCE_WIDTH/scale, SOURCE_HEIGHT/scale)
        .quality(80)
        .write(`${OUTPUT_DIR}/${width}x${height}-${filename}.${format}`)
    }
  })
}

