import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MyComponent name='' />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render name from prop', () => {
    const wrapper = shallow(<MyComponent name='Jack'/>);
    expect(wrapper.find('.name-holder').text()).toContain('My name is - Jack');
  });
});
