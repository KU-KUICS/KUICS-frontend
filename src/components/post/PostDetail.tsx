import React, { useEffect, useRef } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 100%;
`;

interface PostDetailProps {
  article: string;
}

const PostDetail: React.FC = () => {
  const article = '# 123';
  const viewerRef = useRef<Viewer>(null);

  return (
    <PostWrapper>
      <Viewer ref={viewerRef} initialValue={article} />
    </PostWrapper>
  );
};

export default PostDetail;
