/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios from 'axios';
import Bunny from './Bunny';

// 👇️ expect json string from bunnynet
type GetResponse = {
  data: string[];
};

export default class Video extends Bunny {
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
   * @param {string} title
   * @param {string} collectionId
   * @param {string} thumbnailTime
   * @returns {Response|Error|string}
   */
  public async createVideo(
    title: string,
    collectionId: string,
    thumbnailTime: string
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            title: title,
            collectionId: collectionId,
            thumbnailTime: thumbnailTime,
          }),
          mode: 'no-cors',
        }
      );
      return res.data;
    } catch (error: any) {
      // 👇️ error: AxiosError<any, any>
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string} title
   * @param {string} collectionId
   * @param {string|null} chapters
   * @param {string|null} moments
   * @param {string|null} metaTags
   * @returns {Response|Error|string}
   */
  public async updateVideo(
    videoId: string,
    title: string,
    collectionId: string | null,
    chapters: string | null,
    moments: string | null,
    metaTags: string | null
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos/' + videoId,
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            title: title,
            collectionId: collectionId,
            chapters: chapters,
            moments: moments,
            metaTags: metaTags,
          }),
          mode: 'no-cors',
        }
      );
      return res.data;
    } catch (error: any) {
      // 👇️ error: AxiosError<any, any>
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string|null} page
   * @param {string|null} itemsPerPage
   * @param {string|null} search
   * @param {string|null} collection
   * @param {string|null} orderBy
   * @returns {Response|Error|string}
   */
  public async getVideos(
    page: string | null,
    itemsPerPage: string | null,
    search: string | null,
    collection: string | null,
    orderBy: string | null
  ): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos',
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
            collection: collection,
            search: search,
            orderBy: orderBy,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      // 👇️ error: AxiosError<any, any>
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @returns {Response|Error|string}
   */
  public async getSingleVideo(videoId: string): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos/' + videoId,
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} collectionId
   * @param {string} thumbnailTime
   * @param {string} url
   * @param {string[]} headers
   * @returns {Response|Error|string}
   */
  public async fetch(
    collectionId: string,
    thumbnailTime: string,
    url: string,
    headers: string[]
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos/fetch',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            url: url,
            headers: headers,
          }),
          params: {
            collectionId: collectionId,
            thumbnailTime: thumbnailTime,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string} enabledResolutions
   * @returns {Response|Error|string}
   */
  public async upload(
    videoId: string,
    enabledResolutions: string
  ): Promise<any> {
    try {
      const res = await axios.put<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos/' + videoId,
        {
          method: 'PUT',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            enabledResolutions: enabledResolutions,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string} srclang
   * @param {string} label
   * @param {string} captionsFile
   * @returns {Response|Error|string}
   */
  public async addCaption(
    videoId: string,
    srclang: string,
    label: string,
    captionsFile: string
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/captions/' +
          srclang,
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            srclang: srclang,
            label: label,
            captionsFile: captionsFile,
          }),
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string} thumbnailUrl
   * @returns {Response|Error|string}
   */
  public async setThumbnail(
    videoId: string,
    thumbnailUrl: string
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/thumbnail',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            thumbnailUrl: thumbnailUrl,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @returns {Response|Error|string}
   */
  public async reencode(videoId: string): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/reencode',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @returns {Response|Error|string}
   */
  public async heatmap(videoId: string): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/heatmap',
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string|null} dateFrom
   * @param {string|null} dateTo
   * @param {boolean} hourly // true or false
   * @param {string|null} videoGuid
   * @returns {Response|Error|string}
   */
  public async stats(
    videoId: string,
    dateFrom: string | null,
    dateTo: string | null,
    hourly: boolean, // true or false
    videoGuid: string | null
  ): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/heatmap',
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            dateFrom: dateFrom,
            dateTo: dateTo,
            hourly: hourly,
            videoGuid: videoGuid,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @returns {Response|Error|string}
   */
  public async deleteSingleVideo(videoId: string): Promise<any> {
    try {
      const res = await axios.delete<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/videos/' + videoId,
        {
          method: 'DELETE',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }

  /**
   *
   * @param {string} videoId
   * @param {string} srclang
   * @returns {Response|Error|string}
   */
  public async deleteSingleCaption(
    videoId: string,
    srclang: string
  ): Promise<any> {
    try {
      const res = await axios.delete<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/videos/' +
          videoId +
          '/captions/' +
          srclang,
        {
          method: 'DELETE',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
        }
      );
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return error;
      }
    }
  }
}
