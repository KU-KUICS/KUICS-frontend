import styled from 'styled-components';

const EditPostButton = styled.button`
  align-self: flex-end;
  margin-top: 24px;

  width: 100px;
  height: 40px;

  line-height: 40px;
  text-align: center;
  vertical-align: middle;

  font-size: 16px;
  font-weight: bold;

  border-radius: 25px;
  background: #a5d8ff;
  color: #1864ab;

  :hover {
    background: #74c0fc;
  }

  :active {
    background: #4dabf7;
  }
`;

export default EditPostButton;
