import { AxiosPromise } from 'axios';
import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const NOTICE_API_PREFIX = `${config.API_HOST}/notice`;

class NoticeApi extends Api {
  endPoints = {
    FETCH_NOTICE_ALL: `${NOTICE_API_PREFIX}`,
    FETCH_NOTICE_DETAIL: (id: number): string =>
      `${NOTICE_API_PREFIX}/${id}`,
    WRITE_NOTICE_COMMENT: (id: number): string =>
      `${NOTICE_API_PREFIX}/${id}/comment`,
    EDIT_NOTICE_COMMENT: (id: number, commentId: number): string =>
      `${NOTICE_API_PREFIX}/${id}/comment/${commentId}`,
  };

  fetchNoticeAll = (): AxiosPromise => {
    return ApiBuilder.create()
      .get()
      .url(this.endPoints.FETCH_NOTICE_ALL)
      .build();
  };

  fetchNoticeDetail = (id: number): AxiosPromise => {
    return ApiBuilder.create()
      .get()
      .url(this.endPoints.FETCH_NOTICE_DETAIL(id))
      .build();
  };

  writeNoticeComment = (id: number, commentData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.WRITE_NOTICE_COMMENT(id))
      .data(commentData)
      .build();
  };

  editNoticeComment = (
    id: number,
    commentId: number,
    commentData: any
  ): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.EDIT_NOTICE_COMMENT(id, commentId))
      .data(commentData)
      .build();
  };

  deleteNoticeComment = (id: number, commentId: number): AxiosPromise => {
    return ApiBuilder.create()
      .delete()
      .url(this.endPoints.EDIT_NOTICE_COMMENT(id, commentId))
      .build();
  };
}

export default NoticeApi;
