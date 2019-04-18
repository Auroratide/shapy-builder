import api from './api';

export const UPDATE_OPTIONS = 'DataProvider::UPDATE_OPTIONS';
export const updateOptions = (shapes, eyes) => ( {
  type: UPDATE_OPTIONS,
  shapes,
  eyes
} );

export const fetchOptions = () => dispatch => {
  return api.get().then(data => {
    dispatch(updateOptions(data.shapes, data.eyes));
  });
};