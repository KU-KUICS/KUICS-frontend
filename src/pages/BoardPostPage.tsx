import React from 'react';
import styled from 'styled-components';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import BoardPost from 'containers/board/BoardPost';
import PageTemplate from 'components/base/PageTemplate';
import CommentContainer from 'containers/board/CommentContainer';
import Color from 'utils/ColorPalette';

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

const BoardPostPage: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundTemplate>
        <LayoutTemplate>
          <BoardPost />
          <CommentContainer />
        </LayoutTemplate>
      </BackgroundTemplate>
      <Footer />
    </>
  );
};

export default BoardPostPage;
