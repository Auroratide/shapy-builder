const safeClone = arr => arr ? arr.slice(0) : [];

export default class Query {
  constructor(data = {}) {
    this.data = data;
  }

  shapes() {
    return safeClone(this.data.shapes);
  }

  eyes() {
    return safeClone(this.data.eyes);
  }
};