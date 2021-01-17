import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route component={MainPage} path="/" exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
