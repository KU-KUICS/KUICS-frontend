import React from 'react';
import styled from 'styled-components';
import Comment from 'models/Comment';
import Color from 'utils/ColorPalette';

const CommentWrapper = styled.div`
  padding: 14px;
  border-radius: 14px;
  background: ${Color.white};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  box-shadow: rgba(20, 20, 20, 0.05) 0px 8px 16px 0px;
`;

const CommentContext = styled.div`
  flex: 1;
`;

const CommentMeta = styled.div`
  text-align: right;
`;

const Author = styled.div`
  font-weight: bold;
`;

interface PostCommentProps {
  comment: Comment;
}

const PostComment: React.FC<PostCommentProps> = (props: PostCommentProps) => {
  const { comment } = props;
  const { author, context, timestamp } = comment;

  return (
    <CommentWrapper>
      <CommentContext>{context}</CommentContext>
      <CommentMeta>
        <Author>{author}</Author>
        <div>{timestamp}</div>
      </CommentMeta>
    </CommentWrapper>
  );
};

export default PostComment;
