import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <ShapyBuilder />
  </ShapyOptions.Provider>;

export default ContextApiApp;