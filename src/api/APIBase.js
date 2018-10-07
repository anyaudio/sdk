import axios from 'axios';

export default class {
  constructor(baseURL, prefix) {
    this.baseURL = baseURL;
    this.prefix = prefix;
    this.networkClient = axios.create({
      baseURL: baseURL + prefix,
    });
  }
}
