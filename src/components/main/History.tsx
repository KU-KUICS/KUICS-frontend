import React from 'react';
import styled from 'styled-components';

import Color from 'utils/ColorPalette';

import HistoryList from './HistoryList';

const BackgroundWrapper = styled.div`
  background-color: ${Color['gray-0']};
  width: 100%;
`;

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 48px;
  margin: 0 auto;
  height: 800px;
  width: 100%;
  max-width: 1290px;
  align-items: center;
  justify-content: center;
`;

const HistoryTitle = styled.p`
  font-weight: 600;
  font-size: 2rem;

  text-align: center;

  margin-bottom: 48px;
`;

const History: React.FC = () => {
  return (
    <BackgroundWrapper>
      <HistoryWrapper>
        <HistoryTitle>
          KUICS는 정보보호와 보안에 대한 학구적 탐구심, 올바른 윤리의식을
          바탕으로
          <br />
          해킹사고 대응을 위해 다양한 보안기술과 해킹기법을 연구하고 있습니다.
        </HistoryTitle>
        <HistoryList />
      </HistoryWrapper>
    </BackgroundWrapper>
  );
};

export default History;
