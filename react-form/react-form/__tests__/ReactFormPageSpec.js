import React from 'react';
import { shallow } from 'enzyme';
import ReactFormPage from '../ReactFormPage.js';

describe('Component: ReactFormPage', () => {
  it('should have an empty initialstate', () => {
    const wrapper = shallow(<ReactFormPage />);
    expect(wrapper.state()).to.deep.equal({});
  });

  it('should put the name in the state when one is given', () => {
    const wrapper = shallow(<ReactFormPage />);
    const inputField = wrapper.find('input[name="name"]');
    inputField.simulate('change', { target: { value: 'John' } });

    expect(wrapper).to.have.state('name', 'John');
  });

  it('should put the gender in state when a gender is selected', () => {
    const wrapper = shallow(<ReactFormPage />);
    const radioM = wrapper.find('input[value="m"]');
    const radioF = wrapper.find('input[value="f"]');

    radioM.simulate('change', { target: { value: radioM.props().value } });
    expect(wrapper.state()).to.deep.equal({ gender: 'm' });

    radioF.simulate('change', { target: { value: radioF.props().value } });
    expect(wrapper.state()).to.deep.equal({ gender: 'f' });
  });
});
