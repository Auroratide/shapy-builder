import React from 'react';
import { shallow } from 'enzyme';
import OptionsProvider from './OptionsProvider';

describe('<OptionsProvider />', () => {
  describe('render', () => {
    it('renders and fetches options', () => {
      const fetchOptions = jest.fn();
      const wrapper = shallow(<OptionsProvider fetchOptions={fetchOptions} />);
      expect(wrapper).toHaveLength(1);
      expect(fetchOptions).toHaveBeenCalled();
    });
  });
});