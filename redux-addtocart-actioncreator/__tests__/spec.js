import { addToCart, ADD_TO_CART } from '../index';
import { isFSA } from 'flux-standard-action';


describe('addToCart', () => {
  it('should return an action object', () => {
    const productId = 12345;
    const amount = 13;
    const result = addToCart(productId, amount);
    const expected = {
      type: ADD_TO_CART,
      payload: {
        productId,
        amount
      }
    };

    expect(isFSA(result)).to.be.equal(true);
    expect(result).to.deep.equal(expected);
  });
});
