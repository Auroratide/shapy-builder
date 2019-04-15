import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <ShapyOptions.Consumer>{({ shapes }) =>
      <ShapyBuilder shapes={shapes} />
    }</ShapyOptions.Consumer>
  </ShapyOptions.Provider>;

export default ContextApiApp;