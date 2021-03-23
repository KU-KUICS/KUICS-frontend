import { Editor } from '@toast-ui/react-editor';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import WritePostButton from 'components/board/WritePostButton';

const WritePostWrapper = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  padding: 12px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: rgba(20, 20, 20, 0.05) 0px 6px 12px 0px;
`;

const WritePost: React.FC = () => {
  return (
    <WritePostWrapper>
      <TitleInput placeholder="제목을 입력하세요" />
      <Editor
        height="500px"
        placeholder="Markdown 문법으로 내용을 적어주세요!"
        previewStyle="vertical"
      />
      <WritePostButton onClick={() => useHistory().push('/')}>
        작성 완료!
      </WritePostButton>
    </WritePostWrapper>
  );
};

export default WritePost;
