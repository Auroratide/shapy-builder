import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';

describe('<MainContainer />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<MainContainer />)).toHaveLength(1);
    });
  });
});