import reducer from './reducer';
import {
  updateColor,
  selectShape,
  selectEyes
} from './actions';

describe('ShapyBuilder Reducer', () => {
  describe('updateColor', () => {
    it('should update the color', () => {
      expect(reducer({
        color: 'red'
      }, updateColor('black'))).toEqual({
        color: 'black'
      });
    });
  });

  describe('updateShape', () => {
    it('should update the shape index', () => {
      expect(reducer({
        selectedShapeIndex: 0
      }, selectShape(1))).toEqual({
        selectedShapeIndex: 1
      });
    });
  });

  describe('updateEyes', () => {
    it('should update the eyes index', () => {
      expect(reducer({
        selectedEyesIndex: 0
      }, selectEyes(1))).toEqual({
        selectedEyesIndex: 1
      });
    });
  });
});