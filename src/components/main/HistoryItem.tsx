import React from 'react';
import styled from 'styled-components';
import Color from 'utils/ColorPalette';

const ItemWrapper = styled.div`
  padding: 20px 20px;
  border-radius: 16px;

  box-shadow: rgba(205, 205, 205, 0.2) 0px 12px 46px 0px;
  background-color: ${Color.white};

  display: flex;
  align-items: center;

  margin-top: 26px;
`;

const ItemDate = styled.div`
  font-weight: 600;
  font-size: 1.25rem;

  margin-right: 16px;

  line-height: 1.25rem;

  color: #495057;
`;

const ItemContent = styled.div`
  font-weight: 600;
  font-size: 1.25rem;

  line-height: 1.25rem;

  div + div {
    margin-top: 10px;
  }
`;

interface HistoryItemProps {
  date: string;
  content: string[];
}

const HistoryItem: React.FC<HistoryItemProps> = (props: HistoryItemProps) => {
  const { date, content } = props;

  return (
    <ItemWrapper>
      <ItemDate>{date}</ItemDate>
      <ItemContent>
        {content.map((paragraph) => (
          <div key={paragraph}>{paragraph}</div>
        ))}
      </ItemContent>
    </ItemWrapper>
  );
};

export default HistoryItem;
