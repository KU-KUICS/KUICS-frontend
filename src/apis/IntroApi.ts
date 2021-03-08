import { AxiosPromise } from 'axios';
import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const INTRO_API_PREFIX = `${config.API_HOST}/intro`;

class IntroApi extends Api {
  endPoints = {
    INTRO: `${INTRO_API_PREFIX}`,
  };

  getIntro = (): AxiosPromise => {
    return ApiBuilder.create().post().url(this.endPoints.INTRO).build();
  };
}

export default IntroApi;
