import { decorate, observable, computed } from 'mobx';

export default class State {
  constructor(options = []) {
    this.options = options;
    this.selectedIndex = 0;
  }

  get selected() {
    return this.options[this.selectedIndex];
  }

  select(index) {
    this.selectedIndex = index;
  }
};

decorate(State, {
  selectedIndex: observable,
  selected: computed
});