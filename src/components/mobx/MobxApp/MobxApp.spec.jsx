import React from 'react';
import { shallow } from 'enzyme';
import MobxApp from './MobxApp';

describe('<MobxApp />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<MobxApp />)).toHaveLength(1);
    });
  });
});