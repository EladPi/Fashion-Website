import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextUIProvider } from "@nextui-org/react";

ReactDOM.render(
  <NextUIProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NextUIProvider>,
  document.getElementById('root')
);
