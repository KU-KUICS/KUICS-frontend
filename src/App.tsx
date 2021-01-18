import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import MainPage from 'pages/MainPage';
import BoardPage from 'pages/BoardPage';
import BoardPostPage from 'pages/BoardPostPage';
import NoticePage from 'pages/NoticePage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={BoardPostPage} path="/board/:postId" />
        <Route component={BoardPage} path="/board" exact />
        <Route component={NoticePage} path="/notice" exact />
      </Switch>
    </>
  );
};

export default App;
