import React from 'react';
import styled, { css } from 'styled-components';
import Color from 'utils/ColorPalette';

const ListWrapper = styled.div`
  display: flex;

  margin: 0 auto;
  margin-bottom: 48px;
`;

interface PaginationButtonProps {
  isActive: boolean;
}

const PaginationButton = styled.div<PaginationButtonProps>`
  width: 30px;
  height: 30px;

  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;

  background-color: ${(p) => (p.isActive ? '#343a40' : Color.white)};

  ${(p) =>
    p.isActive &&
    css`
      color: #f8f9fa;
    `}

  box-shadow: rgba(20, 20, 20, 0.04) 0px 6px 16px 0px;

  & + & {
    margin-left: 10px;
  }
`;

interface PaginationListProps {
  paginationLength: number;
  currentPage: number;
}

const PaginationList: React.FC<PaginationListProps> = (
  props: PaginationListProps
) => {
  const { paginationLength, currentPage } = props;

  return (
    <ListWrapper>
      {[...Array(paginationLength)].map((_, idx) => (
        <PaginationButton key={`page${idx}`} isActive={currentPage === idx + 1}>
          {idx + 1}
        </PaginationButton>
      ))}
    </ListWrapper>
  );
};

export default PaginationList;
