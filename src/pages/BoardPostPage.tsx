import React from 'react';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import BoardPost from 'containers/board/BoardPost';
import PostDetail from 'components/post/PostDetail';
import PageTemplate from 'components/base/PageTemplate';

const BoardPostPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageTemplate isHeader>
        <PostDetail />
      </PageTemplate>
      <Footer />
    </>
  );
};

export default BoardPostPage;
