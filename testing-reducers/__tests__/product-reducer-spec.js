import productReducer from '../product-reducer.js';

import {
  fetchingProduct,
  fetchProductResult,
  fetchProductError,
} from '../fetch-product-actions.js';

describe('Reducer: product', () => {
  const initialState = { error: null, loading: false, product: null };

  it('should have a valid initial state', () => {
    expect(productReducer(undefined, {})).to.deep.equal(initialState);
  });

  it('should be loading when we start fetching', () => {
    expect(productReducer(undefined, fetchingProduct())).to.deep.equal({
      ...initialState, loading: true
    });
  });

  it('should stop loading on result or error', () => {
    const stateAfterResult = productReducer({ loading: true }, fetchProductResult('mockResult'));
    const stateAfterError = productReducer({ loading: true }, fetchProductError('mockError'));
    expect(stateAfterResult.loading).to.equal(false);
    expect(stateAfterError.loading).to.equal(false);
  });

  it('should store product results', () => {
    const stateAfterResult = productReducer(undefined, fetchProductResult('mockResult'));
    expect(stateAfterResult.product).to.equals('mockResult');
    const stateAfterNewProduct = productReducer(
       stateAfterResult,
       fetchProductResult('mockResult2')
     );
    expect(stateAfterNewProduct.product).to.equal('mockResult2');
  });

  it('should reset product in case of an error', () => {
    const stateWithProduct = { product: 'mockProduct' };
    const stateAfterError = productReducer(stateWithProduct, fetchProductError('mockError'));
    expect(stateAfterError.product).to.equal(null);
  });

  it('should store product error', () => {
    const stateAfterError = productReducer(undefined, fetchProductError('mockError'));
    expect(stateAfterError.error).to.equals('mockError');
    const stateAfterNewError = productReducer(
      stateAfterError,
      fetchProductError('mockError2')
    );
    expect(stateAfterNewError.error).to.equal('mockError2');
  });

  it('should reset error after product result', () => {
    const stateWithError = { error: 'mockError' };
    const stateAfterResult = productReducer(stateWithError, fetchProductResult('mockResult'));
    expect(stateAfterResult.error).to.equal(null);
  });
});
