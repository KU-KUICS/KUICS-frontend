import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import MainPage from 'pages/MainPage';
import BoardPage from 'pages/BoardPage';
import BoardPostPage from 'pages/BoardPostPage';
import NoticePage from 'pages/NoticePage';
import NotFoundPage from 'pages/NotFoundPage';
import WritePostPage from 'pages/WritePostPage';
import MyPage from 'pages/MyPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={WritePostPage} path="/:boardId/write" exact />
        <Route component={BoardPostPage} path="/:boardId/:postId" exact />
        <Route component={BoardPage} path="/board" exact />
        <Route component={NoticePage} path="/notice" exact />
        <Route component={MyPage} path="/my" exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
