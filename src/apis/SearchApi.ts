import { AxiosPromise } from 'axios';

import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const SEARCH_API_PREFIX = `${config.API_HOST}/search`;

class SearchApi extends Api {
  endPoints = {
    SEARCH: `${SEARCH_API_PREFIX}`,
  };

  getIntro = (query: string): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.SEARCH)
      .params({ query })
      .build();
  };
}

export default SearchApi;
