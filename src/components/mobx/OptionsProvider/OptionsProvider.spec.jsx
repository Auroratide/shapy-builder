import React from 'react';
import { shallow } from 'enzyme';
import OptionsProvider from './OptionsProvider';

describe('<OptionsProvider />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<OptionsProvider />)).toHaveLength(1);
    });
  });
});