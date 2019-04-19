import React from 'react';
import { mount } from 'enzyme';
import SelectorContainer from '.';

describe('<Selector /> - context-api', () => {
  describe('behaviour', () => {
    let wrapper;
    const select = n => wrapper.find('.option').at(n).simulate('click');
    const selectedOption = () => wrapper.find('.option').reduce((indexSelected, option, index) => {
      return option.hasClass('selected') ? index : indexSelected;
    }, 0);
    
    it('should update the selected option when a new option is clicked', () => {
      wrapper = mount(<SelectorContainer options={[0, 1, 2]} onSelect={jest.fn()} />);
      expect(selectedOption()).toBe(0);

      select(1);
      expect(selectedOption()).toBe(1);

      select(2);
      expect(selectedOption()).toBe(2);
    });

    it('should onSelect for the option clicked', () => {
      const onSelect = jest.fn();
      wrapper = mount(<SelectorContainer options={['first', 'second']} onSelect={onSelect} />);

      select(1);
      expect(onSelect).toHaveBeenCalledWith(1);
    });
  });
});