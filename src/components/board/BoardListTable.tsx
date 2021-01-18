import React from 'react';
import styled from 'styled-components';
import Color from 'utils/ColorPalette';

const LayoutWrapper = styled.div`
  width: 100%;
`;

const BoardListWrapper = styled.table`
  background: ${Color.white};
  border-radius: 20px;

  margin: 48px auto;
  max-width: 900px;
  width: 100%;

  padding: 14px;

  box-shadow: rgba(20, 20, 20, 0.04) 2px 7px 16px 0px,
    rgba(20, 20, 20, 0) 0px 1px 5px 0px;
`;

const ListRow = styled.tr`
  border-bottom: 1px solid ${Color['gray-2']};
`;

const BoardListTable: React.FC = () => {
  return (
    <LayoutWrapper>
      <BoardListWrapper>
        <colgroup>
          <col />
          <col width="100px" />
          <col width="100px" />
          <col width="100px" />
        </colgroup>
        <ListRow>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>조회수</th>
        </ListRow>
        <ListRow>
          <td>sadsad</td>
          <td>sadsad</td>
          <td>sadsad</td>
          <td>sadsad</td>
        </ListRow>
      </BoardListWrapper>
    </LayoutWrapper>
  );
};

export default BoardListTable;
