import React from 'react';
import styled from 'styled-components';
import PostComment from './PostComment';

const ListWrapper = styled.div`
  width: 100%;
`;

const PostCommentList: React.FC = () => {
  const commentList = [
    {
      author: 'KUICS 최용욱',
      context: '대충 이렇게 댓글이 작성될 것임.',
      timestamp: '2020.04.08 23:59',
    },
  ];

  return (
    <ListWrapper>
      {commentList.map((comment) => (
        <PostComment key={comment.context} comment={comment} />
      ))}
    </ListWrapper>
  );
};

export default PostCommentList;
