import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BoardPage from 'pages/BoardPage';
import BoardPostPage from 'pages/BoardPostPage';
import MainPage from 'pages/MainPage';
import MyPage from 'pages/MyPage';
import NotFoundPage from 'pages/NotFoundPage';
import NoticePage from 'pages/NoticePage';
import WritePostPage from 'pages/WritePostPage';
import GlobalStyle from 'styles/GlobalStyle';
import LoginPage from 'pages/LoginPage';


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
        <Route component={LoginPage} path="/login" exact />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
