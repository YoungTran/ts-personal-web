import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
