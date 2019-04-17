import { inject, observer } from 'mobx-react';
import State from './state';
import ShapyBuilder from './ShapyBuilder';

const storeToProps = ({ store }) => ( {
  shapes: store.shapes(),
  eyes: store.eyes(),
  state: new State(store.shapes(), store.eyes())
} );

export default inject(storeToProps)(observer(ShapyBuilder));
