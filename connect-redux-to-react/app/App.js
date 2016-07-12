import React from 'react';
import { connect, Provider } from 'react-redux';
import RandomImagePage from '../random-image/RandomImagePage.js';
import store from './store.js';

export default () => (
  <Provider store={store}>
    <RandomImagePage />
  </Provider>
);
