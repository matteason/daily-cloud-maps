# Daily cloud maps 
<img alt="" src="https://img.shields.io/github/v/release/matteason/daily-cloud-maps?label=Latest%20map%20date">

This project creates and hosts daily cloud maps based on NASA data for use in 3D modelling software like Blender or Xplanet, or in 2D graphics.

**TL;DR: If you need a high-res greyscale almost-live cloud map, use this URL:**

[https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-clouds.jpg](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-clouds.jpg)

If you have any feedback you can [raise an issue](https://github.com/matteason/daily-cloud-maps/issues/new), [start a discussion](https://github.com/matteason/daily-cloud-maps/discussions/new) or tweet me ([@MattEason](https://twitter.com/matteason))

If you find this project useful and you're feeling spendy, you can <a href='https://ko-fi.com/R5R2CWXB1' target='_blank'>support me on Ko-Fi</a>:

<a href='https://ko-fi.com/R5R2CWXB1' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

<img src="https://github.com/matteason/daily-cloud-maps/raw/main/earth-render.png" width="400" alt="A realistic rendering of Earth, focussed on North America">

_A rendering of Earth using images generated by this project_

## Contents
* [Frequency & availability](#frequency--availability)
* [Available images](#available-images)
* [Limitations](#limitations)
* [Licence & attribution](#licence--attribution)
* [Info for nerds (how the maps are generated)](#bonus-info-for-nerds-how-the-maps-are-generated)

## Frequency & availability
Images are updated once a day. The release tagged `latest` is refreshed daily, so if you configure your software to
use `https://github.com/matteason/daily-cloud-maps/releases/download/latest/[FILENAME]` you'll always stay up-to-date.

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-clouds.jpg`.

I can't guarantee the availability of any particular image; source data may not be available for a particular day if
there's an issue with the satellites. I may also need to eventually delete historic images on a rolling basis if GitHub
get cross with how much space they take up, so keep your own copy of anything important.
If that might affect you, please watch this repo's Issues and I'll let you know if that happens.

## Available images
The following images are created daily. All images are available in four resolutions; replace `[W]x[H]` in the filenames below.

The images shown are the latest images generated and refresh every day.

### Cloud map: `[W]x[H]-clouds.jpg`

![A greyscale cloud map](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-clouds.jpg)

A greyscale cloud map. Layer this over an image of Earth (and set the blending mode to 'screen' if necessary).

<details>
  <summary>Cloud map image URLs (all resolutions)</summary>
These URLs are for the latest images:

* [1024x512 cloud map](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-clouds.jpg)
* [2048x1024 cloud map](https://github.com/matteason/daily-cloud-maps/releases/download/latest/2048x1024-clouds.jpg)
* [4096x2048 cloud map](https://github.com/matteason/daily-cloud-maps/releases/download/latest/4096x2048-clouds.jpg)
* [8192x4096 cloud map](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-clouds.jpg)

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-clouds.jpg`
</details>

### Cloud map (alpha): `[W]x[H]-clouds-alpha.png`

![A greyscale cloud map with transparency](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-clouds-alpha.png)

The same as above, but as a PNG with alpha transparency (the preview above may not be visible if you use light mode)

<details>
  <summary>Cloud map (alpha) image URLs (all resolutions)</summary>
These URLs are for the latest images:

* [1024x512 cloud map (alpha)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-clouds-alpha.png)
* [2048x1024 cloud map (alpha)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/2048x1024-clouds-alpha.png)
* [4096x2048 cloud map (alpha)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/4096x2048-clouds-alpha.png)
* [8192x4096 cloud map (alpha)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-clouds-alpha.png)

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-clouds-alpha.png`
</details>

### Earth with clouds (day): `[W]x[H]-earth.jpg`

![A flat map of Earth with clouds](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-earth.jpg)

The cloud map overlaid on NASA's
[The Blue Marble: Land Surface, Ocean Color and Sea Ice](https://visibleearth.nasa.gov/images/57730/the-blue-marble-land-surface-ocean-color-and-sea-ice)
image.

<details>
  <summary>Earth with clouds (day) image URLs (all resolutions)</summary>
These URLs are for the latest images:

* [1024x512 Earth with clouds (day)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-earth.jpg)
* [2048x1024 Earth with clouds (day)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/2048x1024-earth.jpg)
* [4096x2048 Earth with clouds (day)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/4096x2048-earth.jpg)
* [8192x4096 Earth with clouds (day)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-earth.jpg)

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-earth.jpg`
</details>

### Earth with clouds (night): `[W]x[H]-earth-night.jpg`

![A flat map of Earth at night with clouds obscuring the lights usually visible in populated areas](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-earth-night.jpg)

The cloud map overlaid on NASA's
[Earth at Night](https://earthobservatory.nasa.gov/features/NightLights)
image. You can combine this with the day image using some fancy shader magic to create day/night transitions.

<details>
  <summary>Earth with clouds (night) image URLs (all resolutions)</summary>
These URLs are for the latest images:

* [1024x512 Earth with clouds (night)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-earth-night.jpg)
* [2048x1024 Earth with clouds (night)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/2048x1024-earth-night.jpg)
* [4096x2048 Earth with clouds (night)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/4096x2048-earth-night.jpg)
* [8192x4096 Earth with clouds (night)](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-earth-night.jpg)

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-earth-night.jpg`
</details>

### Specular map: `[W]x[H]-specular.jpg`

![A flat map of Earth with clouds and the Earth's surface in black and the sea in white](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-specular.jpg)

You can use this specular map to make your model more realistic by only showing specular highlights on bodies of water.

<details>
  <summary>Specular image URLs (all resolutions)</summary>
These URLs are for the latest images:

* [1024x512 specular](https://github.com/matteason/daily-cloud-maps/releases/download/latest/1024x512-specular.jpg)
* [2048x1024 specular](https://github.com/matteason/daily-cloud-maps/releases/download/latest/2048x1024-specular.jpg)
* [4096x2048 specular](https://github.com/matteason/daily-cloud-maps/releases/download/latest/4096x2048-specular.jpg)
* [8192x4096 specular](https://github.com/matteason/daily-cloud-maps/releases/download/latest/8192x4096-specular.jpg)

You can download historic images from this project's [Releases](https://github.com/matteason/daily-cloud-maps/releases), or
`https://github.com/matteason/daily-cloud-maps/releases/download/[YYYY-MM-DD]/[FILENAME]` - for example,
`https://github.com/matteason/daily-cloud-maps/releases/download/2022-07-27/8192x4096-specular.jpg`
</details>

## Limitations
The generated images have some limitations due to the source data.

### Poles
The satellites tend not to capture the South Pole. To avoid harsh edges, a static image based on
[Blue Marble Clouds](https://visibleearth.nasa.gov/images/57747/blue-marble-clouds) is overlaid on the bottom
quarter of the live cloud map. This region isn't very visible on 3D images anyway, and most of the area is covered by
the ice cap which makes the clouds even less visible.

### Holes
Occasionally, the satellites capturing the source data will miss some regions. These areas will appear as square-ish
holes without clouds.

### Discontinuities
Because the satellites orbit the Earth, different regions are captured at different times. Sometimes when adjoining
regions are captured at different times, an edge is visible due to the clouds moving between captures.

## Licence & attribution

The source data used for these images is public domain, as works by US government agencies such as NASA aren't protected
by copyright.

I've also released the code and images in this repository into the public domain using the
[CC0 1.0 Universal licence](https://creativecommons.org/publicdomain/zero/1.0/).

I'd appreciate an attribution if you use the code and images, but it's not necessary. Please also acknowledge NASA using
the line below (which helpfully also serves as my acknowledgement to them):

I acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of
NASA's Earth Observing System Data and Information System (EOSDIS).

If you find this project useful, you can <a href='https://ko-fi.com/R5R2CWXB1' target='_blank'>support me on Ko-Fi</a>:

<a href='https://ko-fi.com/R5R2CWXB1' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Bonus info for nerds (how the maps are generated)

These cloud maps are generated using two NASA data sources, accessed via the [GIBS API](https://nasa-gibs.github.io/gibs-api-docs/available-visualizations/): 'Clear Sky Confidence' and 'Corrected Reflectance (True Color)', both captured by NOAA-20 / VIIRS. You can [view these data layers on the NASA Worldview visualiser](https://worldview.earthdata.nasa.gov/?v=-270.1391960697406,-154.09671113588468,316.86333361735933,147.4299789182311&l=VIIRS_NOAA20_Clear_Sky_Confidence_Day(max=0.93),VIIRS_NOAA20_CorrectedReflectance_TrueColor,VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden)&lg=false&t=2022-07-24-T00%3A00%3A00Z).

![A map of where the earth is cloudy, ranging from dark red (no clouds) to cream (definitely clouds)](https://user-images.githubusercontent.com/1935173/181494480-8203d42b-4484-4a76-8a45-8ecd8acd7e4c.png)
![A realistic map of the Earth with clouds over it](https://user-images.githubusercontent.com/1935173/181494550-5e3b552d-f28a-466d-826d-98750b1b714b.png)

You may be wondering why you can't just use the true colour image directly - and you can, but because the satellites capture the earth in vertical strips, you end up with multiple specular reflections on the sea:

![A 3D rendering of Earth. It appears to have highlights in multiple places, as if there are multiple suns](https://user-images.githubusercontent.com/1935173/181495433-f4e382ed-3dd4-4a55-8fc0-df8094904b86.png)

So we take the clear sky confidence and use it to mask the true colour image pixel-by-pixel by taking the confidence map pixel value, converting it to a confidence from 0.0 to 1.0 (how likely is it that the Earth is obscured by clouds?) and multiplying the pixel value of the true-colour image by that confidence. This means we retain the details from the true-colour image in the generated map. The result is then converted to greyscale to remove any residual colour from land or sea showing through the clouds.

![Mosaic of four images showing the same area of the western United States: the original true-colour image, the dark red to cream cloud confidence layer, a composite image of a static image of Earth combined with our cloud map, and our greyscale cloud map](https://user-images.githubusercontent.com/1935173/181499222-3ac4bd23-fe16-431a-9086-4b31ba244d7b.png)

