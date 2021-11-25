import React from 'react';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const options = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render(
  <React.StrictMode>
    <Provider template={AlertTemplate} {...options}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);