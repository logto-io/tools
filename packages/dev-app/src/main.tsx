import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';

const root = document.querySelector('#root');

if (!(root instanceof HTMLElement)) {
  throw new TypeError('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
