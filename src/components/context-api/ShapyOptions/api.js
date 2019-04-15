const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: [
      '<circle cx="100" cy="100" r="50" />',
      '<path d="M 50 50 l 100 0 l 0 100 l -100 0 Z" />'
    ],
    eyes: [
      '<ellipse cx="85" cy="85" rx="10" ry="16" fill="white" stroke="black" stroke-width="2" /><ellipse cx="120" cy="85" rx="10" ry="16" fill="white" stroke="black" stroke-width="2" /><circle cx="87" cy="90" r="8" fill="black" /><circle cx="122" cy="90" r="8" fill="black" />'
    ]
  }), DELAY));