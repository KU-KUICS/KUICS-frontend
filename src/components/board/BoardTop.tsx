import PageTemplate from 'components/base/PageTemplate';
import React from 'react';
import styled from 'styled-components';

interface BoardTopProps {
  boardName: string;
}

const BoardTop: React.FC<BoardTopProps> = (props: BoardTopProps) => {
  const { boardName } = props;

  return <h1>{boardName}</h1>;
};

export default BoardTop;
