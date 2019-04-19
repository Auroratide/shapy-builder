import Store from './store';
import api from './api';

describe('OptionsProvider Store', () => {

  beforeEach(() => {
    jest.spyOn(api, 'get').mockResolvedValue({
      shapes: ['circle'],
      eyes: ['happy']
    })
  });

  afterEach(() => jest.restoreAllMocks());

  it('should return empty array if undefined', () => {
    const store = new Store();

    expect(store.shapes()).toEqual([]);
    expect(store.eyes()).toEqual([]);
  });

  it('should return the array when defined', () => {
    const store = new Store({
      shapes: ['circle'],
      eyes: ['happy']
    });

    expect(store.shapes()).toEqual(['circle']);
    expect(store.eyes()).toEqual(['happy']);
  });

  it('should refresh the data in the store', async () => {
    const store = new Store();

    await store.refresh();

    expect(store.data.shapes).not.toHaveLength(0);
    expect(store.data.eyes).not.toHaveLength(0);
  });
});