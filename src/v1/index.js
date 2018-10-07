import APIBase from '../api/APIBase';

export default class extends APIBase {
  constructor(baseURL) {
    super(baseURL, '/api/v1');
  }

  search = query => this.networkClient.get('/search', { params: { q: query } });
}
