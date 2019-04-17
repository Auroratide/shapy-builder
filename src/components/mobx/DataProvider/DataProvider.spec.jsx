import React from 'react';
import { shallow } from 'enzyme';
import DataProvider from './DataProvider';

describe('<DataProvider />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<DataProvider />)).toHaveLength(1);
    });
  });
});