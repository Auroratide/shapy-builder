import React from 'react';
import { shallow, mount } from 'enzyme';
import DataProvider from '../DataProvider';
import Store from '../DataProvider/store';
import Shapy from './Shapy';
import ShapyBuilder from '.';
import ShapyBuilderPresentation from './ShapyBuilder';
import State from './state';

describe('<ShapyBuilder />', () => {
  describe('render', () => {
    it('renders', () => {
      expect(shallow(<ShapyBuilderPresentation state={new State()} />)).toHaveLength(1);
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

    const withShapes = shapes => ( {
      mount: component => mount(
        <DataProvider store={externalStore = new Store({ shapes })}>
          {component}
        </DataProvider>
      )
    } );

    const updateShapes = shapes => {
      externalStore.data = Object.assign({}, externalStore, { shapes });
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

    it('should update the shape when the external store is updated', () => {
      wrapper = withShapes([]).mount(<ShapyBuilder />);

      expect(shapyShape()).toEqual('');

      updateShapes(['circle']);
      wrapper.update();

      expect(shapyShape()).toEqual('circle');
    });
  });
});