import {
  UPDATE_COLOR,
  SELECT_SHAPE,
  SELECT_EYES
} from './actions';

const initial = {
  color: '#448DDD',
  selectedShapeIndex: 0,
  selectedEyesIndex: 0
};

export default (state = initial, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return Object.assign({}, state, { color: action.color });
    case SELECT_SHAPE:
      return Object.assign({}, state, { selectedShapeIndex: action.index });
    case SELECT_EYES:
      return Object.assign({}, state, { selectedEyesIndex: action.index });
    default:
      return state;
  }
};