import React from 'react';
import { shallow } from 'enzyme';
import ReduxApp from './ReduxApp';

describe('<ReduxApp />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ReduxApp />)).toHaveLength(1);
    });
  });
});