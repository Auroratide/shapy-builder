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
    const shapyColor = () => wrapper.find(Shapy).props().color;

    it('should change the shapy color when a new color is selected', async () => {
      wrapper = mount(<ShapyBuilder />);

      changeColor('#444444');
      expect(shapyColor()).toEqual('#444444');

      changeColor('#555555');
      expect(shapyColor()).toEqual('#555555');
    });
  });
});