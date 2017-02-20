import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

test('Footer component should render as expected', () => {
  const component = shallow(<Footer />);
  expect(component.contains('Footer Content')).toBe(true);
});
