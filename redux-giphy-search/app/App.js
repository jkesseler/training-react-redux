import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store.js';
import GiphySearchPage from '../giphy-search/GiphySearchPage.js';
const store = createStore();
export default () => (
  <Provider store={store}>
    <GiphySearchPage />
  </Provider>
);
