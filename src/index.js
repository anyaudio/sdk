import apiV1 from './v1';

export default class {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = {
      v1: new apiV1(baseURL),
    };
  }
}
