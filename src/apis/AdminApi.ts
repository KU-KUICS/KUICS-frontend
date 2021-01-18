import { AxiosPromise } from 'axios';
import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const ADMIN_API_PREFIX = `${config.API_HOST}/admin`;

class AdminApi extends Api {
  endPoints = {
    FETCH_USER_LIST: `${ADMIN_API_PREFIX}/user`,
    DELETE_USER_BY_ID: (userId: number): string =>
      `${ADMIN_API_PREFIX}/user/${userId}`,
    AUTH_USER_BY_ID: (userId: number): string =>
      `${ADMIN_API_PREFIX}/user/${userId}/auth`,
    WRITE_NOTICE: `${ADMIN_API_PREFIX}/notice`,
    EDIT_NOTICE: (noticeId: number): string =>
      `${ADMIN_API_PREFIX}/notice/${noticeId}`,
  };

  fetchUserList = (): AxiosPromise => {
    return ApiBuilder.create()
      .get()
      .url(this.endPoints.FETCH_USER_LIST)
      .build();
  };

  deleteUserById = (userId: number): AxiosPromise => {
    return ApiBuilder.create()
      .delete()
      .url(this.endPoints.DELETE_USER_BY_ID(userId))
      .build();
  };

  authUserById = (userId: number): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.AUTH_USER_BY_ID(userId))
      .build();
  };

  writeNotice = (noticeData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.WRITE_NOTICE)
      .data(noticeData)
      .build();
  };

  editNotice = (noticeId: number, noticeData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.EDIT_NOTICE(noticeId))
      .data(noticeData)
      .build();
  };

  deleteNotice = (noticeId: number): AxiosPromise => {
    return ApiBuilder.create()
      .delete()
      .url(this.endPoints.EDIT_NOTICE(noticeId))
      .build();
  };
}

export default AdminApi;
