import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <ShapyOptions.Consumer>{({ query }) =>
      <ShapyBuilder shapes={query.shapes()} eyes={query.eyes()} />
    }</ShapyOptions.Consumer>
  </ShapyOptions.Provider>;

export default ContextApiApp;