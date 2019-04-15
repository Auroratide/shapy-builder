const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: [
      '<circle cx="100" cy="100" r="50" />',
      '<path d="M50 50 L150 50 L150 150 L50 150 Z" />'
    ],
    eyes: ['happy']
  }), DELAY));