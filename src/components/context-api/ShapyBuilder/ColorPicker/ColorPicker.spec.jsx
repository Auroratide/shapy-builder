import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('<ColorPicker />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ColorPicker />)).toHaveLength(1);
    });
  });
});