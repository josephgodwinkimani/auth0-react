/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios from 'axios';
import Bunny from './Bunny';

// 👇️ expect json string from bunnynet
type GetResponse = {
  data: string[];
};

export default class Collection extends Bunny {
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
   * @param {string} name
   * @returns {Response|Error|string}
   */
  public async createCollection(name: string): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/collections',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({ name: name }),
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
   * @param {string} collectionId
   * @param {string} name
   * @returns {Response|Error|string}
   */
  public async updateCollection(
    collectionId: string,
    name: string
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/collections/' +
          collectionId,
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({ name: name }),
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
   * @param {string|null} orderBy
   * @returns {Response|Error|string}
   */
  public async getCollection(
    page: string | null,
    itemsPerPage: string | null,
    search: string | null,
    orderBy: string | null
  ): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL + 'library/' + this.libraryId + '/collections',
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
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
   * @param {string} collectionId
   * @returns {Response|Error|string}
   */
  public async getSingleCollection(collectionId: string): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/collections/' +
          collectionId,
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
   * @returns {Response|Error|string}
   */
  public async deleteSingleCollection(collectionId: string): Promise<any> {
    try {
      const res = await axios.delete<GetResponse>(
        this.bunnyURL +
          'library/' +
          this.libraryId +
          '/collections/' +
          collectionId,
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
