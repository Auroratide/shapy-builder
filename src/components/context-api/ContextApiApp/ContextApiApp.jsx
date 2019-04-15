import React from 'react';
import ShapyOptions from '../ShapyOptions';
import Shapy from '../Shapy';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <Shapy />
  </ShapyOptions.Provider>;

export default ContextApiApp;