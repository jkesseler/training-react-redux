import { addToCart, ADD_TO_CART } from '../index';
import { isFSA } from 'flux-standard-action';


describe.only('addToCart', () => {
  it('should return an action object', () => {
    const productNumber = '12345';
    const amount = 13;
    const result = addToCart(productNumber, amount);
    const expected = {
      type: ADD_TO_CART,
      payload: {
        productNumber,
        amount
      }
    };

    expect(isFSA(result)).to.be.equal(true);
    expect(result).to.deep.equal(expected);
  });
});
