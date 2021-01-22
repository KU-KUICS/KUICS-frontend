import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Color from 'utils/ColorPalette';
import AddPostButton from './AddPostButton';
import PaginationList from './PaginationList';

const LayoutWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 48px auto;
  margin-bottom: 24px;
  width: 100%;
`;

const BoardListWrapper = styled.table`
  background: ${Color.white};
  border-radius: 20px;
  border-spacing: 0;

  width: 100%;
  padding: 8px 18px;

  box-shadow: rgba(20, 20, 20, 0.04) 0px 6px 16px 0px;
`;

const ListRow = styled.tr`
  th {
    border-bottom: 1px solid ${Color['gray-2']};
  }

  th,
  td {
    height: 40px;
    line-height: 20px;
  }

  td:first-child {
    color: #495057;
  }

  td:nth-child(2) {
    padding-left: 8px;
  }

  td:first-child,
  td:nth-child(n + 3) {
    text-align: center;
  }
`;

const BoardListTable: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { location } = props;
  const boardPath = location.pathname.split('/')[1];

  return (
    <LayoutWrapper>
      <BoardLayoutWrapper>
        <BoardListWrapper>
          <colgroup>
            <col width="30px" />
            <col />
            <col width="130px" />
            <col width="130px" />
            <col width="70px" />
          </colgroup>
          <ListRow>
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
            <th>조회수</th>
          </ListRow>
          {[...Array(10)].map((idx) => (
            <ListRow key={`notice${idx}`}>
              <td>1</td>
              <td>
                <Link to={`${boardPath}/3`}>테스트용 게시글입니다.</Link>
              </td>
              <td>KUICS 최용욱</td>
              <td>2020.07.03</td>
              <td>31</td>
            </ListRow>
          ))}
        </BoardListWrapper>
        <AddPostButton to={`${boardPath}/write`}>글쓰기</AddPostButton>
      </BoardLayoutWrapper>
      <PaginationList paginationLength={10} currentPage={1} />
    </LayoutWrapper>
  );
};

export default withRouter(BoardListTable);
