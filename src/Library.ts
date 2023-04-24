/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios from 'axios';
import Bunny from './Bunny';

// 👇️ expect json string from bunnynet
type GetResponse = {
  data: string[];
};

export default class Library extends Bunny {
  public accessKey: string;

  public constructor(accessKey: string) {
    super();

    if (accessKey !== undefined || typeof accessKey === 'string') {
      this.accessKey = accessKey;
    } else {
      throw new Error('accessKey is either not set or a string');
    }
  }

  /**
   *
   * @param {string} name
   * @param {string[]} replicationRegions
   * @returns {Response|Error|string}
   */
  public async createLibrary(
    name: string,
    replicationRegions: string[]
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'videolibrary',
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            Name: name,
            ReplicationRegions: replicationRegions,
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
   * @param {string} id
   * @param {string} Name
   * @param {string} CustomHTML
   * @param {string} PlayerKeyColor
   * @param {boolean} EnableTokenAuthentication
   * @param {boolean} EnableTokenIPVerification
   * @param {boolean} ResetToken
   * @param {number} WatermarkPositionLeft
   * @param {number} WatermarkPositionTop
   * @param {number} WatermarkWidth
   * @param {number} WatermarkHeight
   * @param {string} EnabledResolutions
   * @param {string} ViAiPublisherId
   * @param {string} VastTagUrl
   * @param {string} WebhookUrl
   * @param {number} CaptionsFontSize
   * @param {string} CaptionsFontColor
   * @param {string} CaptionsBackground
   * @param {string} UILanguage
   * @param {boolean} AllowEarlyPlay
   * @param {boolean} PlayerTokenAuthenticationEnabled
   * @param {boolean} BlockNoneReferrer
   * @param {boolean} EnableMP4Fallback
   * @param {boolean} KeepOriginalFiles
   * @param {boolean} AllowDirectPlay
   * @param {boolean} EnableDRM
   * @param {string} Controls
   * @param {number} Bitrate240p
   * @param {number} Bitrate360p
   * @param {number} Bitrate480p
   * @param {number} Bitrate720p
   * @param {number} Bitrate1080p
   * @param {number} Bitrate1440p
   * @param {number} Bitrate2160p
   * @param {boolean} ShowHeatmap
   * @param {boolean} EnableContentTagging
   * @param {string} FontFamily
   * @param {boolean} EnableTranscribing
   * @param {boolean} EnableTranscribingTitleGeneration
   * @param {boolean} EnableTranscribingDescriptionGeneration
   * @param {string[]} TranscribingCaptionLanguages // ["language1", "language2"]
   * @returns {Response|Error|string}
   */
  public async updateLibrary(
    id: string,
    Name: string,
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
    EnableTranscribingTitleGeneration: boolean, // Determines if automatic transcribing title generation is currently enabled
    EnableTranscribingDescriptionGeneration: boolean, // Determines if automatic transcribing description generation is currently enabled
    TranscribingCaptionLanguages: string[] // The list of languages that the captions will be automatically transcribed to
  ): Promise<any> {
    try {
      const res = await axios.post<GetResponse>(
        this.bunnyURL + 'videolibrary/' + id,
        {
          method: 'POST',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          body: JSON.stringify({
            Name: Name,
            CustomHTML: CustomHTML,
            PlayerKeyColor: PlayerKeyColor,
            EnableTokenAuthentication: EnableTokenAuthentication,
            EnableTokenIPVerification: EnableTokenIPVerification,
            ResetToken: ResetToken,
            WatermarkPositionLeft: WatermarkPositionLeft,
            WatermarkPositionTop: WatermarkPositionTop,
            WatermarkWidth: WatermarkWidth,
            WatermarkHeight: WatermarkHeight,
            EnabledResolutions: EnabledResolutions,
            ViAiPublisherId: ViAiPublisherId,
            VastTagUrl: VastTagUrl,
            WebhookUrl: WebhookUrl,
            CaptionsFontSize: CaptionsFontSize,
            CaptionsFontColor: CaptionsFontColor,
            CaptionsBackground: CaptionsBackground,
            UILanguage: UILanguage,
            AllowEarlyPlay: AllowEarlyPlay,
            PlayerTokenAuthenticationEnabled: PlayerTokenAuthenticationEnabled,
            BlockNoneReferrer: BlockNoneReferrer,
            EnableMP4Fallback: EnableMP4Fallback,
            KeepOriginalFiles: KeepOriginalFiles,
            AllowDirectPlay: AllowDirectPlay,
            EnableDRM: EnableDRM,
            Controls: Controls,
            Bitrate240p: Bitrate240p,
            Bitrate360p: Bitrate360p,
            Bitrate480p: Bitrate480p,
            Bitrate720p: Bitrate720p,
            Bitrate1080p: Bitrate1080p,
            Bitrate1440p: Bitrate1440p,
            Bitrate2160p: Bitrate2160p,
            ShowHeatmap: ShowHeatmap,
            EnableContentTagging: EnableContentTagging,
            FontFamily: FontFamily,
            EnableTranscribing: EnableTranscribing,
            EnableTranscribingTitleGeneration:
              EnableTranscribingTitleGeneration,
            EnableTranscribingDescriptionGeneration:
              EnableTranscribingDescriptionGeneration,
            TranscribingCaptionLanguages: TranscribingCaptionLanguages,
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
   * @param {string|null} perPage
   * @param {string|null} search
   * @param {boolean} includeAccessKey
   * @returns {Response|Error|string}
   */
  public async getLibrary(
    page: string | null,
    perPage: string | null,
    search: string | null,
    includeAccessKey: boolean | false
  ): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(this.bunnyURL + 'videolibrary', {
        method: 'GET',
        headers: { Accept: 'application/json', AccessKey: this.accessKey },
        params: {
          page: page,
          perPage: perPage,
          search: search,
          includeAccessKey: includeAccessKey,
        },
      });
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
   * @param {string} id
   * @param {boolean} includeAccessKey
   * @returns {Response|Error|string}
   */
  public async getSingleLibrary(
    id: string,
    includeAccessKey: boolean | false
  ): Promise<any> {
    try {
      const res = await axios.get<GetResponse>(
        this.bunnyURL + 'videolibrary/' + id,
        {
          method: 'GET',
          headers: { Accept: 'application/json', AccessKey: this.accessKey },
          params: {
            includeAccessKey: includeAccessKey,
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
   * @param {string} id
   * @returns {Response|Error|string}
   */
  public async deleteSingleLibrary(id: string): Promise<any> {
    try {
      const res = await axios.delete<GetResponse>(
        this.bunnyURL + 'videolibrary/' + id,
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
