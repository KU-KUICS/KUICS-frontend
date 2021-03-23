import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/base/PageTemplate';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 600px;
  width: 100%;
  max-width: 1290px;
  align-items: center;
  justify-content: center;

  padding-bottom: 100px;
`;

const IntroTitle = styled.h1`
  align-self: flex-start;
  font-weight: 800;
  font-size: 3rem;
`;

const IntroSubtitle = styled.h2`
  align-self: flex-start;
  font-weight: 800;
  font-size: 1.625rem;
  color: #495057;
`;

const IntroKUICS = styled(IntroTitle)`
  color: #f8f9fa;

  margin-top: 24px;
  padding: 16px 30px;
  border-radius: 20px;

  background-color: #212529;
  box-shadow: rgba(20, 20, 20, 0.04) 2px 7px 16px 0px,
    rgba(20, 20, 20, 0) 0px 1px 5px 0px;
`;

const Intro: React.FC = () => {
  return (
    <PageTemplate isHeader>
      <IntroWrapper>
        <IntroTitle>고려대학교 정보대학 정보보안동아리</IntroTitle>
        <IntroSubtitle>
          Korea Univ. Institute of Computer Security
        </IntroSubtitle>
        <IntroKUICS>KUICS</IntroKUICS>
      </IntroWrapper>
    </PageTemplate>
  );
};

export default Intro;
