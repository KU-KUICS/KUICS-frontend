import Header from 'components/base/Header';
import PageTemplate from 'components/base/PageTemplate';
import History from 'components/main/History';
import Intro from 'components/main/Intro';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <History />
    </>
  );
};

export default MainPage;
