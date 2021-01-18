import { AxiosPromise } from 'axios';
import Api from './Api';
import ApiBuilder from './ApiBuilder';
import config from './config';

const BOARD_API_PREFIX = `${config.API_HOST}/board`;

class BoardApi extends Api {
  endPoints = {
    FETCH_BOARD_ALL: `${BOARD_API_PREFIX}`,
    FETCH_BOARD_DETAIL: (id: number): string => `${BOARD_API_PREFIX}/${id}`,
    WRITE_BOARD_POST: `${BOARD_API_PREFIX}`,
    EDIT_BOARD_POST: (id: number): string => `${BOARD_API_PREFIX}/${id}`,
    WRITE_BOARD_COMMENT: (id: number): string =>
      `${BOARD_API_PREFIX}/${id}/comment`,
    EDIT_BOARD_COMMENT: (id: number, commentId: number): string =>
      `${BOARD_API_PREFIX}/${id}/comment/${commentId}`,
  };

  fetchBoardAll = (): AxiosPromise => {
    return ApiBuilder.create()
      .get()
      .url(this.endPoints.FETCH_BOARD_ALL)
      .build();
  };

  fetchPostDetail = (id: number): AxiosPromise => {
    return ApiBuilder.create()
      .get()
      .url(this.endPoints.FETCH_BOARD_DETAIL(id))
      .build();
  };

  writePost = (postData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.WRITE_BOARD_POST)
      .data(postData)
      .build();
  };

  editPost = (id: number, postData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.EDIT_BOARD_POST(id))
      .data(postData)
      .build();
  };

  deletePost = (id: number): AxiosPromise => {
    return ApiBuilder.create()
      .delete()
      .url(this.endPoints.EDIT_BOARD_POST(id))
      .build();
  };

  writePostComment = (id: number, commentData: any): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.WRITE_BOARD_COMMENT(id))
      .data(commentData)
      .build();
  };

  editPostComment = (
    id: number,
    commentId: number,
    commentData: any
  ): AxiosPromise => {
    return ApiBuilder.create()
      .post()
      .url(this.endPoints.EDIT_BOARD_COMMENT(id, commentId))
      .data(commentData)
      .build();
  };

  deletePostComment = (id: number, commentId: number): AxiosPromise => {
    return ApiBuilder.create()
      .delete()
      .url(this.endPoints.EDIT_BOARD_COMMENT(id, commentId))
      .build();
  };
}

export default BoardApi;
