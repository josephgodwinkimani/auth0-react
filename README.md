# bunnynet-stream

> Leverage BunnyNET Stream APIs in your Node application

## Install

```bash
npm i bunnynet-stream
```

## Usage

This package works with most node applications using a framework or not.

### Get Library List

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // this access key is different from collection's access key
);
const libraryList = libraries.getLibrary(
  '1', // current page to get
  '100', // number of items on a page (perPage)
  'Serie A', // search string
  true // include access key
);
console.log(libraryList);
return libraryList;
```

### Get Library

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const singlelibrary = libraries.getSingleLibrary(
  '1s47rp45-5432-12g1-tyu7-457174206983', // the ID of the video library that will be returned
  true // include access key
);
console.log(singlelibrary);
return singlelibrary;
```

### Create Library

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const createlibrary = libraries.createLibrary(
  'Serie A', // name of the video library
  ['A', 'B'] // geo-replication regions of the underlying storage zone
);
console.log(createlibrary);
return createlibrary;
```

### Update Library

```ts
import Library from 'bunnynet-stream/lib/Library';

const library = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const updatelibrary = library.createLibrary(
  '1s47rp45-5432-12g1-tyu7-457174206983', // video library Id
  'Serie A', // name of the video library
  // From the line below add the type only e.g. ResetToken: boolean, the value here is either true or false https://docs.bunny.net/reference/videolibrarypublic_update
    CustomHTML: string, // Sets the player custom HTML code
    PlayerKeyColor: string, // Sets the player key control color
    EnableTokenAuthentication: boolean, // Determines if the token authentication should be enabled
    EnableTokenIPVerification: boolean, // Determines if the token IP verification should be enabled
    ResetToken: boolean, // Set to true to reset the CDN and embed view token key
    WatermarkPositionLeft: number, // Sets the left offset of the watermark position (in %)
    WatermarkPositionTop: number, // Sets the top offset of the watermark position (in %)
    WatermarkWidth: number, // Sets the width of the watermark (in %)
    WatermarkHeight: number, // Sets the height of the watermark (in %)
    EnabledResolutions: string, //  Sets the enabled resolutions for the transcoding. At least one resolution should be enabled. Possible values: 240p, 360p, 480p, 720p, 1080p, 1440p, 2160p
    ViAiPublisherId: string, // Sets the vi.ai publisher ID
    VastTagUrl: string, // Sets the Vast tag URL
    WebhookUrl: string, // Sets the webhook API url
    CaptionsFontSize: number, // Sets the captions display font size
    CaptionsFontColor: string, // ets the captions display font color
    CaptionsBackground: string, // Sets the captions display background color
    UILanguage: string, // Sets the UI language of the video player
    AllowEarlyPlay: string, // Determines if the Early-Play feature should be enabled
    PlayerTokenAuthenticationEnabled: boolean, // Determines if the token authentication should be enabled
    BlockNoneReferrer: boolean, // Determines if requests without a referer should be blocked
    EnableMP4Fallback: boolean, // Determines if MP4 fallback should be enabled for this library
    KeepOriginalFiles: boolean, // Determines if the original file should be kept after the video is processed
    AllowDirectPlay: boolean, // Determines if direct play URLs should be enabled for the library
    EnableDRM: boolean, // Determines if MediaCage basic DRM should be enabled for this library
    Controls: string, // The comma separated list of controls that will be displayed in the video player. Possible values: play-large, play, progress, current-time, mute, volume, captions, settings, pip, airplay, fullscreen
    Bitrate240p: number, // The bitrate used for encoding 240p videos
    Bitrate360p: number, // The bitrate used for encoding 360p videos
    Bitrate480p: number, // The bitrate used for encoding 480p videos
    Bitrate720p: number, // The bitrate used for encoding 720p videos
    Bitrate1080p: number, // The bitrate used for encoding 1080p videos
    Bitrate1440p: number, // The bitrate used for encoding 1440p videos
    Bitrate2160p: number, // The bitrate used for encoding 2160p videos
    ShowHeatmap: boolean, // Determines if the video watch heatmap should be displayed in the player
    EnableContentTagging: boolean, // Determines if content tagging should be enabled for this library
    FontFamily: string, // The captions font family
    EnableTranscribing: boolean, // Determines if the automatic audio transcribing is currently enabled for this zone
    true, // EnableTranscribingTitleGeneration: boolean, Determines if automatic transcribing title generation is currently enabled
    true, // EnableTranscribingDescriptionGeneration: boolean, Determines if automatic transcribing description generation is currently enabled
    ["A", "B"] // The list of languages that the captions will be automatically transcribed to
);
console.log(updatelibrary);
return updatelibrary;
```

### Delete Library

```ts
import Library from 'bunnynet-stream/lib/Library';

const library = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const deletelibrary = library.deleteSingleLibrary(
  '1s47rp45-5432-12g1-tyu7-457174206983' // library Id
);
console.log(deletelibrary);
return deletelibrary;
```

### Get Library Languages

```ts
import Library from 'bunnynet-stream/lib/Library';

const library = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const videolibrarylanguages = library.getLanguages();
console.log(videolibrarylanguages);
return videolibrarylanguages;
```

### Add Watermark

```ts
import Library from 'bunnynet-stream/lib/Library';

const library = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const watermarkedlibrary = library.addWatermark(
  '1s47rp45-5432-12g1-tyu7-457174206983' // library Id
);
console.log(watermarkedlibrary);
return watermarkedlibrary;
```

### Remove Watermark

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const nonwatermarkedlibrary = libraries.removeWatermark(
  '1s47rp45-5432-12g1-tyu7-457174206983' // library Id
);
console.log(nonwatermarkedlibrary);
return nonwatermarkedlibrary;
```

### Add Allowed Referer

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const allowedreferer = libraries.addAllowedReferer(
  '*.mywebsite.com' // hostname that will be added as an allowed referer
);
console.log(allowedreferer);
return allowedreferer;
```

### Remove Allowed Referer

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const allowedreferer = libraries.removeAllowedReferer(
  '*.mywebsite.com' // hostname that will be removed as an allowed referer
);
console.log(allowedreferer);
return allowedreferer;
```

### Add Blocked Referer

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const blockedreferer = libraries.addBlockedReferer(
  '*.mywebsite.com' // hostname that will be removed as an allowed referer
);
console.log(blockedreferer);
return blockedreferer;
```

### Remove Blocked Referer

```ts
import Library from 'bunnynet-stream/lib/Library';

const libraries = new Library(
  '2a4abbfbe40772ffa1fa-a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const removeblockedreferer = libraries.removeBlockedReferer(
  '*.mywebsite.com' // hostname that will be removed as a blocked referer
);
console.log(removeblockedreferer);
return removeblockedreferer;
```

### Get Collection List

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // collection's access key is different from library api key
);
const collectionList = collection.getCollection(
  '1', // current page to get
  '100', // number of items on a page
  'Collection Animals in Savannah', // search string
  'date' // order records by date
);
console.log(collectionList);
return collectionList;
```

### Get Collection

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const singlecollection = collection.getSingleCollection(
  '1s47rp45-5432-12g1-tyu7-457174206983' // collection Id
);
console.log(singlecollection);
return singlecollection;
```

### Create Collection

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const createcollection = collection.createCollection(
  'Collection Animals in Savannah' // collection title
);
console.log(createcollection);
return createcollection;
```

### Update Collection

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const updatecollection = collection.createCollection(
  '1s47rp45-5432-12g1-tyu7-457174206983', // collection Id
  'Collection Animals in Savannah' // collection title
);
console.log(updatecollection);
return updatecollection;
```

### Delete Collection

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const deletecollection = collection.deleteSingleCollection(
  '1s47rp45-5432-12g1-tyu7-457174206983' // collection Id
);
console.log(deletecollection);
return deletecollection;
```

### Get Video List

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const videoList = video.getVideos(
  '1', // current page to get
  '100', // number of items on a page
  '1s47rp45-5432-12g1-tyu7-457174206983', // collection Id
  'date' // order records by date
);
console.log(videoList);
return videoList;
```

### Get Video

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const singlevideo = video.getSingleVideo(
  '1s47rp45-5432-12g1-tyu7-457174206983' // video Id
);
console.log(singlevideo);
return singlevideo;
```

### Create Video Object

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const createvideo = video.createCollection(
  'Documentary of Animals in Savannah', // video title
  '1s47rp45-5432-12g1-tyu7-457174206983', // collection Id
  '2147483647' // video time in ms to extract the main video thumbnail
);
console.log(createvideo);
return createvideo;
```

### Update Video

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const chapters =  [
        {
        "title": "chapter1", // title
        "start": 0,  // start time in ms
        "end": 2147483647 // end time in ms
        }
]

const moments =  [
        {
        "label": "momentA", // label
        "timestamp": 3600,  // timestamp in ms
        }
]

const metaTags =  [
    {
      "property": "twitter:card",
      "value": "summary"
    },
    {
      "property": "twitter:site",
      "value": "@netfix"
    },
    {
      "property": "twitter:creator",
      "value": "@georgemayor"
    },
    {
      "property": "og:url",
      "value": "http://netfix.com/a-documentary-of-the-ocean/"
    },
    {
      "property": "og:title",
      "value": "A Documentary of the Ocean"
    },
    {
      "property": "og:description",
      "value": "Experience our planet's beauty through the eyes of Zologist Martha Stewart."
    }
]

const updatevideo = collection.updateVideo(
  '1s47rp45-5432-12g1-tyu7-457174206983', // video Id
  'Collection Animals in Savannah' // video title
  '1s47rp45-5432-12g1-tyu7-457174206983', // collection Id
   chapters, // list of chapters available for the video
   moments, // list of moments available for the video
   metaTags // meta tags added to the video
);
console.log(updatevideo);
return updatevideo;
```

### Upload Video

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const uploadvideo = video.upload(
  '1s47rp45-5432-12g1-tyu7-457174206983', // video Id
  null // enabledResolutions
);
console.log(uploadvideo);
return uploadvideo;
```

### Reencode Video

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const reencodevideo = video.reencode(
  '1s47rp45-5432-12g1-tyu7-457174206983' // video Id
);
console.log(reencodevideo);
return reencodevideo;
```

### Add Caption

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const addcaption = video.addCaption(
  '1s47rp45-5432-12g1-tyu7-457174206983' // video Id
  'tyu7-457174206983', // srclang
  'German', // label of caption file
  'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==' // Base64 encoded captions file

);
console.log(addcaption);
return addcaption;
```

### Set Thumbnail

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const addThumbnail = video.setThumbnail(
  '1s47rp45-5432-12g1-tyu7-457174206983', // video Id
  'https://cdn.thumbnails.net/abcd-bdget-thumbnail.jpeg' // thumbnail url
);
console.log(addThumbnail);
return addThumbnail;
```

### Delete Single Video

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const deleteVideo = video.deleteSingleVideo(
  '1s47rp45-5432-12g1-tyu7-457174206983' // video Id
);
console.log(deleteVideo);
return deleteVideo;
```

### Delete Single Caption

```ts
import Video from 'bunnynet-stream/lib/Video';

const video = new Video(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const deleteCaption = video.deleteSingleCaption(
  '1s47rp45-5432-12g1-tyu7-457174206983' // video Id
);
console.log(deleteCaption);
return deleteCaption;
```

### TUS Resumable Upload

```ts
import * as fs from 'fs';
import * as path from 'path';
import RFU from 'bunnynet-stream/lib/RFU';

const path = `${__dirname}/../../abcd-bdget-movie.mov`;
const file = fs.createReadStream(path);

const tusupload = new RFU(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
);
const upload = tusupload.upload(
  file,
  '1s47rp45-5432-12g1-tyu7-457174206983', // video Id
  1234567890, // expiration time of upload
  'Collection Animals in Savannah', // video title
  '1s47rp45-5432-12g1-tyu7-457174206983' // collection Id
);
// Check if there are any previous uploads to continue.
upload.findPreviousUploads().then(function (previousUploads) {
  // Found previous uploads so we select the first one.
  if (previousUploads.length) {
    upload.resumeFromPreviousUpload(previousUploads[0]);
  }

  // Start the upload
  upload.start();
});
```

## Contributing

Thanks to everyone who has contributed to this project so far.

<a href="https://github.com/josephgodwinkimani/bunnynet-stream/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=josephgodwinkimani/bunnynet-stream" />
</a>

## Resources

- [![Documentation](https://img.shields.io/badge/documentation-bunny.net-green.svg)](https://docs.bunny.net/)

## License

Licensed under the MIT license, see [`LICENSE`](LICENSE)
