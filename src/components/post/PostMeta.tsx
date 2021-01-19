import React from 'react';
import styled from 'styled-components';

const PostMetaWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
`;

const PostMeta: React.FC = () => {
  return (
    <PostMetaWrapper>
      <h1>대충 게시글 제목은 이렇게 표시됩니다.</h1>
      <div>2020년 04월 08일</div>
      <div>KUICS 최용욱</div>
    </PostMetaWrapper>
  );
};

export default PostMeta;
