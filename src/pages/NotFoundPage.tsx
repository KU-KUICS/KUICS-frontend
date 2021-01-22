import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Color from 'utils/ColorPalette';

const BackgroundTemplate = styled.div`
  background-color: ${Color['gray-0']};
  padding-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 200px);
`;

const WidthTemplate = styled.div`
  width: 100%;
  max-width: 1290px;
  padding: 0 48px;

  text-align: center;
`;

const MsgWrapper = styled.div`
  margin: 0 auto;
  padding: 28px;
  border-radius: 14px;
  width: 200px;

  background-color: ${Color.white};
  box-shadow: rgba(20, 20, 20, 0.05) 0px 6px 16px 0px;
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <BackgroundTemplate>
        <WidthTemplate>
          <MsgWrapper>
            <h1>404!</h1>
            <div>막다른 길이에요!</div>
            <Link to="/">메인으로 가기</Link>
          </MsgWrapper>
        </WidthTemplate>
      </BackgroundTemplate>
      <Footer />
    </>
  );
};

export default NotFoundPage;
