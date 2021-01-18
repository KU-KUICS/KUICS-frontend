import React from 'react';
import styled from 'styled-components';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import BoardTop from 'components/board/BoardTop';
import Color from 'utils/ColorPalette';
import BoardList from 'containers/board/BoardList';

const BackgroundTemplate = styled.div`
  background-color: ${Color['gray-0']};
  padding-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WidthTemplate = styled.div`
  width: 100%;
  max-width: 1290px;
  padding: 0 48px;
`;

const BoardPage: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundTemplate>
        <WidthTemplate>
          <BoardTop />
          <BoardList />
        </WidthTemplate>
      </BackgroundTemplate>
      <Footer />
    </>
  );
};

export default BoardPage;
