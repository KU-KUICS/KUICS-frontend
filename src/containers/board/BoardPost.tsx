import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

interface BoardRouteParams {
  postId: string;
}

type BoardPostProps = RouteComponentProps<BoardRouteParams>;

const BoardPost: React.FC<BoardPostProps> = ({ match }: BoardPostProps) => {
  const {
    params: { postId },
  } = match;

  return <div>{postId}</div>;
};

export default withRouter(BoardPost);
