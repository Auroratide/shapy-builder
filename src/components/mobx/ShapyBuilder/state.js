import { decorate, observable, autorun } from 'mobx';

export default class State {
  constructor(shapes = [], eyes = []) {
    this.color = '#448DDD';
    this.shape = '';
    this.eye = '';

    autorun(() => {
      this.shape = shapes[0] || '';
      this.eye = eyes[0] || '';
    });

    this.setColor = this.setColor.bind(this);
    this.setShape = this.setShape.bind(this);
    this.setEye = this.setEye.bind(this);
  }

  setColor(newColor) {
    this.color = newColor;
  }

  setShape(newShape) {
    this.shape = newShape;
  }

  setEye(newEye) {
    this.eye = newEye;
  }
};

decorate(State, {
  color: observable,
  shape: observable,
  eye: observable
});