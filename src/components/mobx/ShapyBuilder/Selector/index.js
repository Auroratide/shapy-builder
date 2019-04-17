import { observer } from 'mobx-react';
import State from './state';
import Selector from './Selector';

const component = observer(Selector);
component.State = State;

export default component;