import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import options from '../OptionsProvider/reducer';
import builder from '../ShapyBuilder/reducer';

export const create = (initialState) => createStore(combineReducers({
  options,
  builder
}), initialState, applyMiddleware(thunk));

export default create();