import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'twin.macro';
import AppRouter from './AppRouter';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <GlobalStyles />
    <AppRouter />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
