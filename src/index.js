import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './containers/Game';
import './style/styles.css';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);