import { UPDATE_OPTIONS } from './actions';

const initial = {
  shapes: [],
  eyes: []
};

export default (state = initial, action) => {
  switch(action.type) {
    case UPDATE_OPTIONS:
      return Object.assign({}, {
        shapes: action.shapes,
        eyes: action.eyes
      });
    default:
      return state;
  }
};