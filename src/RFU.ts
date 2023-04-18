/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import sha256 from 'crypto-js/sha256';
import * as tus from 'tus-js-client';
import { BunnyTUS } from './Bunny';

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

declare const File: {
  prototype: File;
  new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

export default class RFU extends BunnyTUS {
  public libraryId: string;
  public accessKey: string;

  public constructor(libraryId: string, accessKey: string) {
    super();

    if (libraryId !== undefined || typeof libraryId === 'string') {
      this.libraryId = libraryId;
    } else {
      throw new Error('libraryId is either not set or a string');
    }

    if (accessKey !== undefined || typeof accessKey === 'string') {
      this.accessKey = accessKey;
    } else {
      throw new Error('accessKey is either not set or a string');
    }
  }

  /**
   *
   * @param {File} file
   * @param {string} videoId
   * @param {string} expirationTime
   * @param {string} title
   * @param {string} collectionId
   * @returns {Response|Error|string}
   */
  public upload(
    file: File,
    videoId: string,
    expirationTime: string,
    title: string,
    collectionId: string
  ): any {
    const libraryId = this.libraryId;
    const accessKey = this.accessKey;
    const hash: CryptoJS.lib.WordArray = sha256(
      libraryId + accessKey + expirationTime + videoId
    );
    new tus.Upload(file, {
      endpoint: this.bunnyURL,
      retryDelays: [0, 3000, 5000, 10000, 20000, 60000, 60000],
      headers: {
        AuthorizationSignature: hash.toString(CryptoJS.enc.Utf8), // SHA256 signature (library_id + api_key + expiration_time + video_id)
        AuthorizationExpire: expirationTime, // Expiration time as in the signature,
        VideoId: videoId, // The guid of a previously created video object through the Create Video API call
        LibraryId: libraryId,
      },
      metadata: {
        filetype: file.type,
        title: title,
        collection: collectionId,
      },
      onError: function (error) {
        return JSON.stringify(error);
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        const result = {
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal,
        };
        return JSON.stringify(result);
      },
      onSuccess: function () {
        const result = {
          success: true,
          libraryId: libraryId,
          collectionId: collectionId,
          videoId: videoId,
          title: title,
        };
        return JSON.stringify(result);
      },
    });
  }
}
