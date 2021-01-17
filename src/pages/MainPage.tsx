import Header from 'components/base/Header';
import PageTemplate from 'components/base/PageTemplate';
import Intro from 'components/main/Intro';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageTemplate isHeader>
        <Intro />
      </PageTemplate>
    </>
  );
};

export default MainPage;
