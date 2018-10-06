import axios from 'axios';

import apiV1 from './v1';
import apiV2 from './v2';

const defaultApi = apiV1;

const apis = {
  1: apiV1,
  2: apiV2,
};

export const getApiByVersion = version => apis[version] || defaultApi;


export class ApiBase {
  constructor(baseURL, prefix) {
    this.baseURL = baseURL;
    this.prefix = prefix;
    this.networkClient = axios.create({
      baseURL: baseURL + prefix,
    });
  }
}
