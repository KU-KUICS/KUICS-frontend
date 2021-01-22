import React from 'react';
import styled from 'styled-components';
import ChangePasswordButton from './ChangePasswordButton';

const MyProfile: React.FC = () => {
  return (
    <>
      <h3>닉네임</h3>
      <div>KUICS 최용욱</div>
      <h3>이메일</h3>
      <div>hyperflow@kakao.com</div>
      <ChangePasswordButton>비밀번호 수정</ChangePasswordButton>
    </>
  );
};

export default MyProfile;
