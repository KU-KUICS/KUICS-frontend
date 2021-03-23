import React from 'react';

import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import PageTemplate from 'components/base/PageTemplate';
import Login from 'containers/auth/Login';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageTemplate isHeader>
        <Login />
      </PageTemplate>
      <Footer />
    </>
  );
};

export default LoginPage;
