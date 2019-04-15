import React from 'react';
import { shallow, mount } from 'enzyme';
import Selector from './Selector';

describe('<Selector />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<Selector />)).toHaveLength(1);
    });
  });

  describe('behaviour', () => {
    let wrapper;
    const select = n => wrapper.find('.option').at(n).simulate('click');
    const selectedOption = () => wrapper.find('.option').reduce((indexSelected, option, index) => {
      return option.hasClass('selected') ? index : indexSelected;
    }, 0);
    
    it('should update the selected option when a new option is clicked', () => {
      wrapper = mount(<Selector options={[0, 1, 2]} onSelect={jest.fn()} />);
      expect(selectedOption()).toBe(0);

      select(1);
      expect(selectedOption()).toBe(1);

      select(2);
      expect(selectedOption()).toBe(2);
    });

    it('should onSelect for the option clicked', () => {
      const onSelect = jest.fn();
      wrapper = mount(<Selector options={['first', 'second']} onSelect={onSelect} />);

      select(1);
      expect(onSelect).toHaveBeenCalledWith('second');
    });
  });
});