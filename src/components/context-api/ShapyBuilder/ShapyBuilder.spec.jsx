import React from 'react';
import { shallow, mount } from 'enzyme';
import Shapy from './Shapy';
import ShapyBuilder from './ShapyBuilder';

describe('<ShapyBuilder />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ShapyBuilder />)).toHaveLength(1);
    });
  });

  describe('behaviour', () => {
    let wrapper;
    const changeColor = (color) => wrapper.find('input[type="color"]').simulate('change', {
      target: {
        value: color
      }
    });
    const changeShape = (n) => wrapper.find('.option').at(n).simulate('click');
    const shapyColor = () => wrapper.find(Shapy).props().color;
    const shapyShape = () => wrapper.find(Shapy).props().shape;

    it('should change the shapy color when a new color is selected', () => {
      wrapper = mount(<ShapyBuilder />);

      changeColor('#444444');
      expect(shapyColor()).toEqual('#444444');

      changeColor('#555555');
      expect(shapyColor()).toEqual('#555555');
    });

    it('should change the shapy shape when a new shape is selected', () => {
      wrapper = mount(<ShapyBuilder shapes={['circle', 'square']} />);

      changeShape(1);
      expect(shapyShape()).toEqual('square');

      changeShape(0);
      expect(shapyShape()).toEqual('circle');
    });

    it('should update the shape when the shapes prop is updated', () => {
      wrapper = mount(<ShapyBuilder shapes={[]} />);

      expect(shapyShape()).toEqual('');

      wrapper.setProps({ shapes: ['circle'] });
      wrapper.update();

      expect(shapyShape()).toEqual('circle');
    });
  });
});