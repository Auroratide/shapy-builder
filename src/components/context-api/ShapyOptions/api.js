const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: [
      '<circle cx="100" cy="100" r="50" />',
      '<path d="M 50 50 l 100 0 l 0 100 l -100 0 Z" />'
    ],
    eyes: ['happy']
  }), DELAY));