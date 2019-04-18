import React from 'react';
import { shallow } from 'enzyme';
import Selector from './Selector';

describe('<Selector />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<Selector options={[]} />)).toHaveLength(1);
    });
  });
});