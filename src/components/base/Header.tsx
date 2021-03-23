import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled, {css} from 'styled-components';

import useScrollDetect from 'hooks/useScrollDetect';
import Color from 'utils/ColorPalette';

interface HeaderWrapperProps {
  isScroll: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  transition: all 0.3s ease;
  ${p =>
    p.isScroll &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
    `}

  z-index: 20;
`;

const HeaderBlock = styled.div`
  padding: 0 48px;
  margin: 0 auto;
  max-width: 1290px;

  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SideHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  * + * {
    margin-left: 24px;
  }
`;

interface HeaderLinkProps {
  isLogo?: boolean;
}

const HeaderLink = styled(Link)<HeaderLinkProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;

  font-size: ${p => (p.isLogo ? '16px' : '14px')};
  font-weight: ${p => (p.isLogo ? '800' : '600')};
  border-radius: 4px;
  padding: 0 11px;

  :hover {
    background-color: ${Color['gray-2']};
  }

  :active {
    background-color: ${Color['gray-4']};
  }
`;

const LoginButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;

  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  padding: 0 11px;

  cursor: pointer;

  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;

  :active {
    background-color: ${Color['gray-2']};
  }
`;

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const history = useHistory();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  const handleClick = () => {
    history.push('/login');
  };

  useScrollDetect(handleScroll);

  return (
    <HeaderWrapper isScroll={!!scroll}>
      <HeaderBlock>
        <SideHeaderWrapper>
          <HeaderLink to="/" isLogo>
            KUICS
          </HeaderLink>
          <HeaderLink to="/notice">공지사항</HeaderLink>
          <HeaderLink to="/board">게시판</HeaderLink>
        </SideHeaderWrapper>
        <LoginButton type="button" onClick={handleClick}>
          로그인
        </LoginButton>
      </HeaderBlock>
    </HeaderWrapper>
  );
};

export default Header;
