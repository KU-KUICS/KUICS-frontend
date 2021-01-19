import BoardListTable from 'components/board/BoardListTable';
import AddComment from 'components/post/AddComment';
import PostCommentList from 'components/post/PostCommentList';
import React from 'react';
import styled from 'styled-components';

const CommentContainer: React.FC = () => {
  return (
    <>
      <PostCommentList />
      <AddComment />
      <BoardListTable />
    </>
  );
};

export default CommentContainer;
