import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <ShapyOptions.Consumer>{({ shapes, eyes }) =>
      <ShapyBuilder shapes={shapes} eyes={eyes} />
    }</ShapyOptions.Consumer>
  </ShapyOptions.Provider>;

export default ContextApiApp;