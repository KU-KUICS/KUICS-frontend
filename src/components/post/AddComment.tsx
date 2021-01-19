import React from 'react';
import styled from 'styled-components';

const AddCommmentWrapper = styled.div`
  margin-top: 24px;
  height: 100px;

  display: flex;
  flex-wrap: no-wrap;
`;

const CommentInput = styled.textarea`
  flex: 1;

  font-size: 1rem;
  padding: 14px;
  border-radius: 14px;

  box-shadow: rgba(20, 20, 20, 0.05) 0px 8px 16px 0px;
`;

const CommentButton = styled.button`
  width: 100px;
  border-radius: 14px;
  margin-left: 14px;
  font-size: 1rem;

  background: #b2f2bb;
  color: #2b8a3e;

  :hover {
    background: #8ce99a;
  }

  :active {
    background: #69db7c;
  }
`;

const AddComment: React.FC = () => {
  return (
    <AddCommmentWrapper>
      <CommentInput />
      <CommentButton>댓글 쓰기</CommentButton>
    </AddCommmentWrapper>
  );
};

export default AddComment;
