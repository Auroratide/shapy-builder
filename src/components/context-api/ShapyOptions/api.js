const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: [
      '<circle cx="100" cy="100" r="50" />'
    ],
    eyes: ['happy']
  }), DELAY));