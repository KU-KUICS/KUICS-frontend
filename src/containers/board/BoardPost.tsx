import BoardTop from 'components/board/BoardTop';
import PostDetail from 'components/post/PostDetail';
import PostMeta from 'components/post/PostMeta';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

interface BoardRouteParams {
  postId: string;
}

type BoardPostProps = RouteComponentProps<BoardRouteParams>;

const BoardPost: React.FC<BoardPostProps> = ({
  match,
  location,
}: BoardPostProps) => {
  const {
    params: { postId },
  } = match;

  const boardName = location.pathname.split('/')[1];

  return (
    <>
      <BoardTop boardName={boardName === 'board' ? '게시판' : '공지사항'} />
      <PostMeta />
      <PostDetail />
    </>
  );
};

export default withRouter(BoardPost);
