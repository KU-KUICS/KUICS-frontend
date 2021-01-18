import React from 'react';
import styled from 'styled-components';
import Color from 'utils/ColorPalette';

const BackgroundWrapper = styled.div`
  background-color: #343a40;
  width: 100%;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 48px;
  margin: 0 auto;
  height: 200px;
  width: 100%;
  max-width: 1290px;
  justify-content: center;

  * {
    color: ${Color['gray-0']};
  }
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
`;

const Copyright = styled.div`
  font-weight: bold;
`;

const Address = styled.div`
  color: #ced4da;
`;

const Octocat = styled.a`
  margin-top: 20px;
  fill: #ced4da;
`;

const Footer: React.FC = () => {
  return (
    <BackgroundWrapper>
      <FooterWrapper>
        <Logo>KUICS</Logo>
        <Copyright>
          &copy; 2021 Korea Univ. Institute of Computer Security.
        </Copyright>
        <Address>
          서울특별시 성북구 안암동5가 고려대학교 과학도서관 309B호
        </Address>
        <Octocat target="_blank" href="https://github.com/KU-KUICS">
          <svg
            height="30"
            viewBox="0 0 16 16"
            version="1.1"
            width="30"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </Octocat>
      </FooterWrapper>
    </BackgroundWrapper>
  );
};

export default Footer;
