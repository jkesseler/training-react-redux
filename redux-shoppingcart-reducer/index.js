import { combineReducers } from 'redux';
import reviews from './reviews';
import shoppingCart from './shoppingCart';

const reducer = combineReducers({
  shoppingCart,
  reviews
});

export default reducer;
