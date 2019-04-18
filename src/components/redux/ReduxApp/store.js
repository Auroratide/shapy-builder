import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import options from '../OptionsProvider/reducer';

export default createStore(combineReducers({
  options
}), applyMiddleware(thunk));