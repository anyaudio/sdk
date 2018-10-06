import { getApiByVersion } from './apiUtils';

export default class AnyAudioSDK {
  constructor(baseURL, apiVersion=1) {
    this.baseURL = baseURL;
    this.setApi(apiVersion);
  }

  setApi = apiVersion => {
    this.apiVersion = apiVersion;
    this.api = getApiByVersion(this.apiVersion)(this.baseURL);
  }
}
