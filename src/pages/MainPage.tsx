import React from 'react';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import History from 'components/main/History';
import Intro from 'components/main/Intro';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <History />
      <Footer />
    </>
  );
};

export default MainPage;
