import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld.js';

describe('Component: HelloWorld', () => {
  const wrapper = shallow(<HelloWorld />);

  it('should contain the text "Hello World"', () => {
    expect(wrapper.text()).to.contain('Hello World');
  });

  it('should render a list of 3 items', () => {
    expect(wrapper.find('li')).to.have.length(3);

    wrapper.find('li').forEach((item, index) => {
      expect(item.text()).to.contain(`item ${index + 1}`);
    });
  });
});
