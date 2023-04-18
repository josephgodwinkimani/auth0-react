# bunnynet-stream

> Leverage BunnyNET Stream APIs in your Node application

## Install

```bash
npm i bunnynet-stream
```

## Usage

This package works with most node applications using a framework or not.

### Get Collection List

```ts
import Collection from 'bunnynet-stream/lib/Collection';

const collection = new Collection(
  '123456', // library id
  'a12345cb-6789-12xy-qw12345a123e-er45-1234' // access key
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
const createcollection = collection.createCollection(
  '1s47rp45-5432-12g1-tyu7-457174206983', // collection Id
  'Collection Animals in Savannah' // collection title
);
console.log(createcollection);
return createcollection;
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
const videoList = collection.getVideos(
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
