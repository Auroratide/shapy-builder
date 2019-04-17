import { inject, observer } from 'mobx-react';
import State from './state';
import ShapyBuilder from './ShapyBuilder';

const storeToProps = ({ store }) => ( {
  state: new State(store.shapes(), store.eyes())
} );

export default inject(storeToProps)(observer(ShapyBuilder));
