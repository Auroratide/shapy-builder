import React from 'react';
import { shallow } from 'enzyme';
import SvgString from './SvgString';

describe('<SvgString />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<SvgString />)).toHaveLength(1);
    });
  });
});