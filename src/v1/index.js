import { ApiBase } from '../apiUtils';

export default class extends ApiBase {
  constructor(baseURL) {
    super(baseURL, '/api/v1');
  }

  search = query => this.networkClient.get('/search', { q: query });
}
