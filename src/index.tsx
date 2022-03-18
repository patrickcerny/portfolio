import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import { windowStore } from './utils/stores/windowStore';
import { zIndexStore } from './utils/stores/zIndexStore';
import dotenv from 'dotenv';

dotenv.config();

const stores = {
  windowStore,
  zIndexStore,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
