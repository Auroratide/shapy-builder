import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { create } from '../ReduxApp/store';
import { updateOptions } from '../OptionsProvider/actions';
import Shapy from '../../common/Shapy';
import ShapyBuilder from '.';
import ShapyBuilderPresentation from './ShapyBuilder';

describe('<ShapyBuilder />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ShapyBuilderPresentation shapes={[]} eyes={[]} />)).toHaveLength(1);
    });
  });

  describe('behaviour', () => {
    let externalStore;
    let wrapper;
    const changeColor = (color) => wrapper.find('input[type="color"]').simulate('change', {
      target: {
        value: color
      }
    });
    const changeShape = (n) => wrapper.find('.option').at(n).simulate('click');
    const shapyColor = () => wrapper.find(Shapy).props().color;
    const shapyShape = () => wrapper.find(Shapy).props().shape;

    const withShapes = shapes => {
      externalStore = create();
      externalStore.dispatch(updateOptions(shapes, []));

      return {
        mount: component => mount(
          <Provider store={externalStore}>
            {component}
          </Provider>
        )
      };
    };

    it('should change the shapy color when a new color is selected', () => {
      wrapper = withShapes([]).mount(<ShapyBuilder />);

      changeColor('#444444');
      expect(shapyColor()).toEqual('#444444');

      changeColor('#555555');
      expect(shapyColor()).toEqual('#555555');
    });

    it('should change the shapy shape when a new shape is selected', () => {
      wrapper = withShapes(['circle', 'square']).mount(<ShapyBuilder />);

      changeShape(1);
      expect(shapyShape()).toEqual('square');

      changeShape(0);
      expect(shapyShape()).toEqual('circle');
    });
  });
});