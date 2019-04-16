import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <h1>Shapy Builder!</h1>
    <h2>Using React Context API and Hooks</h2>
    <ShapyOptions.Consumer>{({ query }) =>
      <ShapyBuilder shapes={query.shapes()} eyes={query.eyes()} />
    }</ShapyOptions.Consumer>
  </ShapyOptions.Provider>;

export default ContextApiApp;