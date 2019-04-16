const DELAY = 500;

export const get = () => new Promise(resolve => setTimeout(() =>
  resolve({
    shapes: [
      '<circle cx="100" cy="100" r="50" />',
      '<path d="M 50 50 l 100 0 l 0 100 l -100 0 Z" />',
      '<path d="M 69.25 50 L 131.36 50 L 150.65 109 L 100.35 145.65 L 50 109 Z" />'
    ],
    eyes: [
      '<ellipse cx="85" cy="85" rx="10" ry="16" fill="white" stroke="black" stroke-width="2" /><ellipse cx="120" cy="85" rx="10" ry="16" fill="white" stroke="black" stroke-width="2" /><circle cx="87" cy="90" r="8" fill="black" /><circle cx="122" cy="90" r="8" fill="black" />',
      '<path d="M 75 85 A 10 12 0 0 1 95 85" stroke="black" stroke-width="4" fill="transparent" /><path d="M 110 85 A 10 12 0 0 1 130 85" stroke="black" stroke-width="4" fill="transparent" />',
      '<path d="M75 82 l20 0 a10 15 0 0 1 -20 0 Z" fill="white" stroke="black" stroke-width="2" /><path d="M73 82 l20 0 a5 8 0 0 1 -12 0 Z" fill="black" /><path d="M110 82 l20 0 a10 15 0 0 1 -20 0 Z" fill="white" stroke="black" stroke-width="2" /><path d="M108 82 l20 0 a5 8 0 0 1 -12 0 Z" fill="black" />'
    ]
  }), DELAY));