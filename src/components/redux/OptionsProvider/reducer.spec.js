import reducer from './reducer';
import {
  updateOptions,
  fetchOptions
} from './actions';
import api from './api';

describe('OptionsProvider Reducer', () => {
  const shapes = ['circle'];
  const eyes = ['happy'];

  describe('updateOptions', () => {
    it('should update the state with the new options', () => {
      expect(reducer({
        shapes: [],
        eyes: []
      }, updateOptions(shapes, eyes))).toEqual({
        shapes: shapes,
        eyes: eyes
      });
    });
  });

  describe('fetchOptions', () => {
    beforeEach(() => {
      jest.spyOn(api, 'get').mockResolvedValue({ shapes, eyes });
    });

    afterEach(() => jest.restoreAllMocks());

    it('should dispatch updateOptions upon success', () => {
      const dispatch = jest.fn();
      return fetchOptions()(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledWith(updateOptions(shapes, eyes))
      });
    });
  });
});