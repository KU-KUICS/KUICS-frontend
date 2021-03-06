import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChangePasswordButton = styled.button`
  align-self: flex-end;
  margin-top: 24px;

  padding: 0 14px;
  height: 40px;

  line-height: 40px;
  text-align: center;
  vertical-align: middle;

  font-size: 16px;
  font-weight: bold;

  border-radius: 25px;
  background: #b2f2bb;
  color: #2b8a3e;

  :hover {
    background: #8ce99a;
  }

  :active {
    background: #69db7c;
  }
`;

export default ChangePasswordButton;
