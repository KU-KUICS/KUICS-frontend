import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LoginInput = styled.input`
  border: 1px solid #222;
`;

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <LoginInput
        value={id}
        onChange={event => setId(event.currentTarget.value)}
      />
      <LoginInput
        value={password}
        onChange={event => setPassword(event.currentTarget.value)}
        type="password"
      />
      <button
        onClick={() => {
          window.location.href = 'http://test.kuics.kro.kr:4000/api/auth/login';
        }}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
