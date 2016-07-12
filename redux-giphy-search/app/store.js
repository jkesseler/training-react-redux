import { createStore as _createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import giphySearchTermReducer from '../giphy-search/giphy-searchterm-reducer.js';
import giphyResponseReducer from '../giphy-search/giphy-response-reducer.js';

export default function createStore() {
  const debugStoreEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

  const combinedReducers = combineReducers({
    searchTerm: giphySearchTermReducer,
    giphyResponse: giphyResponseReducer,
  });

  const storeEnhancers = [
    debugStoreEnhancer,
    applyMiddleware(thunkMiddleware),
  ];

  return compose(...storeEnhancers)(_createStore)(combinedReducers);
}
