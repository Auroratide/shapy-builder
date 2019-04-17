import { decorate, observable } from 'mobx';
import * as api from './api';

const safeClone = arr => arr ? arr.slice(0) : [];

export default class Store {
  constructor(initialData = {}) {
    this.data = initialData;
  }

  refresh() {
    return api.get().then(data => {
      this.data = data;
    });
  }
  
  shapes() {
    return safeClone(this.data.shapes);
  }
  
  eyes() {
    return safeClone(this.data.eyes);
  }
};

decorate(Store, { data: observable });