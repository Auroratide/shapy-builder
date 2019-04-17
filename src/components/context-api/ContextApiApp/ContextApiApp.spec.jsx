import React from 'react';
import { shallow, mount } from 'enzyme';
import ShapyOptions from '../ShapyOptions';
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
      jest.spyOn(ShapyOptions, 'Provider').mockImplementation(({ children }) =>
        <ShapyOptions.Context.Provider value={{ query: {
          shapes: () => ['circle'],
          eyes: () => ['happy']
        }}}>
          {children}
        </ShapyOptions.Context.Provider>
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