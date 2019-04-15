const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: ['circle', 'square'],
    eyes: ['happy']
  }), DELAY));