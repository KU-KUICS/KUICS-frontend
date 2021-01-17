import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route component={MainPage} path="/" exact />
      </Switch>
    </>
  );
};

export default App;
