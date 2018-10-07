import ApiV1 from './v1';

export default class {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = {
      v1: new ApiV1(baseURL),
    };
  }
}
