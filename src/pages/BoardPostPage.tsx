import React from 'react';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import BoardPost from 'containers/board/BoardPost';

const BoardPostPage: React.FC = () => {
  return (
    <>
      <Header />
      <BoardPost />
      <Footer />
    </>
  );
};

export default BoardPostPage;
