import Query from './query';

describe('ShapeOptions Query', () => {
  it('should return empty array if undefined', () => {
    const query = new Query();

    expect(query.shapes()).toEqual([]);
    expect(query.eyes()).toEqual([]);
  });

  it('should return the array when defined', () => {
    const query = new Query({
      shapes: ['circle'],
      eyes: ['happy']
    });

    expect(query.shapes()).toEqual(['circle']);
    expect(query.eyes()).toEqual(['happy']);
  });
});