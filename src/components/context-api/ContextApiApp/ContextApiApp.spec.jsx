import React from 'react';
import { shallow, mount } from 'enzyme';
import OptionsProvider from '../OptionsProvider';
import ShapyBuilder from '../ShapyBuilder';
import ContextApiApp from './ContextApiApp';

describe('<ContextApiApp />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ContextApiApp />)).toHaveLength(1);
    });
  });

  describe('behaviour', () => {
    beforeEach(() => {
      const query = new OptionsProvider.Query({
        shapes: ['circle'],
        eyes: ['happy']
      });

      jest.spyOn(OptionsProvider, 'Provider').mockImplementation(({ children }) =>
        <OptionsProvider.Context.Provider value={{ query }}>
          {children}
        </OptionsProvider.Context.Provider>
      );
    });
  
    afterEach(() => jest.restoreAllMocks());

    it('renders the builder with intial shapes and eyes', () => {
      const wrapper = mount(<ContextApiApp />);
      const shapyBuilder = wrapper.find(ShapyBuilder);

      expect(shapyBuilder.props().shapes).toEqual(['circle']);
      expect(shapyBuilder.props().eyes).toEqual(['happy']);
    });
  });
});