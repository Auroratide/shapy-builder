import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<App />)).toHaveLength(1);
    });
  });
});