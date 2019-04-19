import React from 'react';
import { mount } from 'enzyme';
import Selector from '.';

describe('<Selector />', () => {
  describe('behaviour', () => {
    let wrapper;
    const select = n => wrapper.find('.option').at(n).simulate('click');
    const selectedOption = () => wrapper.find('.option').reduce((indexSelected, option, index) => {
      return option.hasClass('selected') ? index : indexSelected;
    }, 0);
    
    it('should update the selected option when a new option is clicked', () => {
      wrapper = mount(<Selector state={new Selector.State([0, 1, 2])} />);
      expect(selectedOption()).toBe(0);

      select(1);
      expect(selectedOption()).toBe(1);

      select(2);
      expect(selectedOption()).toBe(2);
    });

    it('should update the selected option in the state for higher components to read', () => {
      const state = new Selector.State(['first', 'second']);
      wrapper = mount(<Selector state={state} />);

      select(1);
      expect(state.selected).toEqual('second');
    });
  });
});