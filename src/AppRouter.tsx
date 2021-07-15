import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
