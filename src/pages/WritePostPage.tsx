import React from 'react';
import styled from 'styled-components';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import Color from 'utils/ColorPalette';
import WritePost from 'components/post/WritePost';

const BackgroundTemplate = styled.div`
  background-color: ${Color['gray-0']};
  padding-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutTemplate = styled.div`
  max-width: 1290px;
  width: 100%;
  padding: 0 48px;
  padding-bottom: 48px;

  min-height: calc(100vh - 200px - 90px);
`;

const WritePostPage: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundTemplate>
        <LayoutTemplate>
          <WritePost />
        </LayoutTemplate>
      </BackgroundTemplate>
      <Footer />
    </>
  );
};

export default WritePostPage;
