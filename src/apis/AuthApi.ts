import { AxiosPromise, AxiosResponse } from 'axios';
import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const AUTH_API_PREFIX = `${config.API_HOST}/auth`;

class AuthApi extends Api {
  endPoints = {
    LOGIN: `${AUTH_API_PREFIX}/login`,
    LOGOUT: `${AUTH_API_PREFIX}/logout`,
    REGISTER: `${AUTH_API_PREFIX}/register`,
    UNREGISTER: `${AUTH_API_PREFIX}/unregister`,
    FIND_ID: `${AUTH_API_PREFIX}/find/id`,
    FIND_PWD: `${AUTH_API_PREFIX}/find/password`,
    CHANGE_PWD: `${AUTH_API_PREFIX}/change/password`,
  };

  // Login, Logout

  register = (registerData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.REGISTER)
      .data(registerData)
      .build();
  };

  unregister = (unregisterData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.UNREGISTER)
      .data(unregisterData)
      .build();
  };

  findId = (accountData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.FIND_ID)
      .data(accountData)
      .build();
  };

  findPwd = (accountData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.FIND_PWD)
      .data(accountData)
      .build();
  };

  changePwd = (accountData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.FIND_PWD)
      .data(accountData)
      .build();
  };
}

export default AuthApi;
