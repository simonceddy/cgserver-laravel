import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles';
import './bootstrap';
import Login from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
