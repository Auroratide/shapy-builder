import React from 'react';
import { shallow } from 'enzyme';
import Shapy from './Shapy';

describe('<Shapy />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<Shapy />)).toHaveLength(1);
    });
  });
});