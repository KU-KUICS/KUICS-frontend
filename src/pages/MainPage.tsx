import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import History from 'components/main/History';
import Intro from 'components/main/Intro';
import React from 'react';

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
