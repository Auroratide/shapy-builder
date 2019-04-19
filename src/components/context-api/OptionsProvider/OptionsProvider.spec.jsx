import React from 'react';
import { mount } from 'enzyme';
import OptionsProvider from './OptionsProvider';
import api from './api';

describe('<ShapyOptions />', () => {
  describe('behaviour', () => {

    beforeEach(() => {
      jest.spyOn(api, 'get').mockResolvedValue({
        shapes: ['pentagon'],
        eyes: ['sad']
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should get state from the api', async () => {
      const wrapper = mount(<OptionsProvider.Provider>
        <OptionsProvider.Consumer>{({ query }) =>
          <div>
            <p>{query.shapes()}</p>
            <p>{query.eyes()}</p>
          </div>
        }</OptionsProvider.Consumer>
      </OptionsProvider.Provider>);

      await new Promise(resolve => window.setImmediate(resolve));
      wrapper.update();

      expect(wrapper.text()).toContain('pentagon');
      expect(wrapper.text()).toContain('sad');
    });
  });
});