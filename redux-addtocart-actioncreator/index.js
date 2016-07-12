
export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(productNumber, amount) {
  return {
    type: ADD_TO_CART,
    payload: {
      productNumber,
      amount
    }
  };
}
