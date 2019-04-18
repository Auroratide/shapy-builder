import React from 'react';
import { mount } from 'enzyme';
import api from '../common/api';

import App from './ReduxApp';

describe('<ReduxApp />', () => {
  describe('functional', () => {
    const shapes = ['circle', 'square'];
    const eyes = ['happy', 'sad'];

    let wrapper;

    const selectColor = (color) => wrapper.find('input[type="color"]').simulate('change', {
      target: {
        value: color
      }
    });
    const selectShape = n => wrapper.find('.option').at(n).simulate('click');
    const selectEyes = n => wrapper.find('.option').at(n + shapes.length).simulate('click');

    const getColor = () => wrapper.find('svg.shape').props().fill;
    const getShape = () => wrapper.find('svg.shape').text();
    const getEyes = () => wrapper.find('svg.eyes').text();;

    beforeEach(async () => {
      jest.spyOn(api, 'get').mockResolvedValue({ shapes, eyes });

      wrapper = mount(<App />);
      await new Promise(resolve => window.setImmediate(resolve));
      wrapper.update();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should change color when a new color is selected', () => {
      selectColor('red');
      expect(getColor()).toEqual('red');

      selectColor('black');
      expect(getColor()).toEqual('black');
    });

    it('should change shape when a new shape is selected', () => {
      expect(getShape()).toEqual('circle');

      selectShape(1);
      expect(getShape()).toEqual('square');

      selectShape(0);
      expect(getShape()).toEqual('circle');
    });

    it('should change eyes when a new eyes type is selected', () => {
      expect(getEyes()).toEqual('happy');

      selectEyes(1);
      expect(getEyes()).toEqual('sad');

      selectEyes(0);
      expect(getEyes()).toEqual('happy');
    });
  });
});