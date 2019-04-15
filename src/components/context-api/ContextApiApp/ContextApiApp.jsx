import React from 'react';
import ShapyOptions from '../ShapyOptions';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <ShapyOptions.Consumer>{({ shapes }) => {
      return <div>{shapes}</div>;
    }}</ShapyOptions.Consumer>
  </ShapyOptions.Provider>;

export default ContextApiApp;