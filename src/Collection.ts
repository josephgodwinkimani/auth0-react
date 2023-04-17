/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Using ES6 modules with Babel or TypeScript
import fetch from 'cross-fetch';
import Bunny from './Bunny';

export default class Collection extends Bunny {
  public libraryId: string | undefined;
  public accessKey: string | undefined;

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
   * @param {string} libraryId
   * @param {string} name
   * @returns {Response|Error|string}
   */
  public async createCollection(libraryId: string, name: string): Promise<any> {
    await fetch(this.bunnyURL + 'library/' + libraryId + '/collections', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify({ name: name }),
      mode: 'no-cors',
    })
      .then(function (response: Response) {
        if (response.status >= 400) {
          return 'Bad response from server';
        }
        return response.json();
      })
      .catch(function (err: Error) {
        return JSON.stringify(err.message);
      });
  }

  /**
   *
   * @param {string} libraryId
   * @param {string} collectionId
   * @param {string} name
   * @returns {Response|Error|string}
   */
  public async updateCollection(
    libraryId: string,
    collectionId: string,
    name: string
  ): Promise<any> {
    await fetch(
      this.bunnyURL + 'library/' + libraryId + '/collections/' + collectionId,
      {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({ name: name }),
        mode: 'no-cors',
      }
    )
      .then(function (response: Response) {
        if (response.status >= 400) {
          return 'Bad response from server';
        }
        return response.json();
      })
      .catch(function (err: Error) {
        return JSON.stringify(err.message);
      });
  }

  /**
   *
   * @param {string} libraryId
   * @param {string} page
   * @param {string} itemsPerPage
   * @param {string} search
   * @param {string} orderBy
   * @returns {Response|Error|string}
   */
  public async getCollection(
    libraryId: string,
    page: string,
    itemsPerPage: string,
    search: string,
    orderBy: string
  ): Promise<any> {
    const params = new URLSearchParams({
      page: page,
      itemsPerPage: itemsPerPage,
      search: search,
      orderBy: orderBy,
    }).toString();
    await fetch(
      this.bunnyURL + 'library/' + libraryId + '/collections?' + params,
      {
        method: 'GET',
        headers: { Accept: 'application/json' },
        mode: 'no-cors',
      }
    )
      .then(function (response: Response) {
        if (response.status >= 400) {
          return 'Bad response from server';
        }
        return response.json();
      })
      .catch(function (err: Error) {
        return JSON.stringify(err.message);
      });
  }

  /**
   *
   * @param {string} libraryId
   * @param {string} collectionId
   * @returns {Response|Error|string}
   */
  public async getSingleCollection(
    libraryId: string,
    collectionId: string
  ): Promise<any> {
    await fetch(
      this.bunnyURL + 'library/' + libraryId + '/collections/' + collectionId,
      {
        method: 'GET',
        headers: { Accept: 'application/json' },
        mode: 'no-cors',
      }
    )
      .then(function (response: Response) {
        if (response.status >= 400) {
          return 'Bad response from server';
        }
        return response.json();
      })
      .catch(function (err: Error) {
        return JSON.stringify(err.message);
      });
  }

  /**
   *
   * @param {string} libraryId
   * @param {string} collectionId
   * @returns {Response|Error|string}
   */
  public async deleteSingleCollection(
    libraryId: string,
    collectionId: string
  ): Promise<any> {
    await fetch(
      this.bunnyURL + 'library/' + libraryId + '/collections/' + collectionId,
      {
        method: 'DELETE',
        headers: { Accept: 'application/json' },
        mode: 'no-cors',
      }
    )
      .then(function (response: Response) {
        if (response.status >= 400) {
          return 'Bad response from server';
        }
        return response.json();
      })
      .catch(function (err: Error) {
        return JSON.stringify(err.message);
      });
  }
}
