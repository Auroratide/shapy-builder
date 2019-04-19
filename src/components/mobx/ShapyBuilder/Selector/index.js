import { observer } from 'mobx-react';
import State from './state';
import withSelectedState from './with-selected-state';
import Selector from '../../../common/Selector';

const component = observer(withSelectedState(Selector));
component.State = State;

export default component;