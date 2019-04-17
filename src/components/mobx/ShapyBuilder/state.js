import { decorate, observable, computed, autorun } from 'mobx';
import Selector from './Selector';

export default class State {
  constructor(shapes = [], eyes = []) {
    this.color = '#448DDD';
    this.shapeSelector = new Selector.State(shapes);
    this.eyesSelector = new Selector.State(eyes);

    autorun(() => {
      this.shapeSelector = new Selector.State(shapes);
      this.eyesSelector = new Selector.State(eyes);
    });

    this.setColor = this.setColor.bind(this);
  }

  get shape() {
    return this.shapeSelector.selected || '';
  }

  get eyes() {
    return this.eyesSelector.selected || '';
  }

  setColor(newColor) {
    this.color = newColor;
  }
};

decorate(State, {
  color: observable,
  shapeSelector: observable,
  eyesSelector: observable,
  shape: computed,
  eyes: computed
});