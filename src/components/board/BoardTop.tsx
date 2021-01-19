import PageTemplate from 'components/base/PageTemplate';
import React from 'react';
import styled from 'styled-components';

const BoardTopTitle = styled.h1`
  align-self: flex-start;
`;

interface BoardTopProps {
  boardName: string;
}

const BoardTop: React.FC<BoardTopProps> = (props: BoardTopProps) => {
  const { boardName } = props;

  return <BoardTopTitle>{boardName}</BoardTopTitle>;
};

export default BoardTop;
