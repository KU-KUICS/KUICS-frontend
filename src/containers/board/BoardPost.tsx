import BoardTop from 'components/board/BoardTop';
import PostDetail from 'components/post/PostDetail';
import PostMeta from 'components/post/PostMeta';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import EditPostButton from './EditPostButton';

const PostLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 0;
`;

const PostWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 14px;

  box-shadow: rgba(20, 20, 20, 0.05) 0px 8px 16px 0px;
`;

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
      <PostLayoutWrapper>
        <PostWrapper>
          <PostMeta />
          <PostDetail />
        </PostWrapper>
        <EditPostButton>수정</EditPostButton>
      </PostLayoutWrapper>
    </>
  );
};

export default withRouter(BoardPost);
