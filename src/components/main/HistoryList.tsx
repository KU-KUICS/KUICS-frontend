import React from 'react';
import styled, { keyframes } from 'styled-components';

import HistoryItem from './HistoryItem';

const ListAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-50%);
  }
`;

const ListAnimationWrapper = styled.div`
  animation-duration: 18s;
  animation-name: ${ListAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 790px;

  overflow: hidden;
  padding: 0 30px;

  height: 500px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface History {
  date: string;
  content: string[];
}

const historyArray: History[] = [
  { date: '2005', content: ['KUICS 설립'] },
  {
    date: '2007',
    content: ['KISA 지원 동아리로 선정', 'PADOCON (전국보안동아리연합) 활동'],
  },
  {
    date: '2010',
    content: [
      'KUICS CTF 1회 개최',
      'KUCIS (대학정보보호동아리연합회) 활동',
      'KUSISWALL (숙명여대, 한양대 연합) 세미나 시작',
    ],
  },
  { date: '2012', content: ['KUICS CTF 2회', 'Incognito Conference 1회 회장'] },
  { date: '2013', content: ['KUICS CTF 3회', 'Incognito Conference 2회 회장'] },
  { date: '2014', content: ['KUICS CTF 4회', 'Incognito Conference 3회 회장'] },
  { date: '2015', content: ['Incognito Conference 4회 회장'] },
  { date: '2016', content: ['Incognito Conference 5회 회장'] },
  { date: '2017', content: ['Incognito Conference 6회 회장'] },
  { date: '2018', content: ['Incognito Conference 7회 회장'] },
  { date: '2019', content: ['Incognito Conference 8회 회장'] },
  { date: '2020', content: ['Incognito Conference 9회 회장'] },
];

const HistoryList: React.FC = () => {
  return (
    <ListWrapper>
      <ListAnimationWrapper>
        {historyArray.map((item) => (
          <HistoryItem
            key={item.date}
            date={item.date}
            content={item.content}
          />
        ))}
        {historyArray.map((item) => (
          <HistoryItem
            key={item.date}
            date={item.date}
            content={item.content}
          />
        ))}
      </ListAnimationWrapper>
    </ListWrapper>
  );
};

export default HistoryList;
