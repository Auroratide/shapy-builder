import React from 'react';

export default Component => ({ state }) =>
  <Component
    selectedIndex={state.selectedIndex}
    onSelect={i => state.select(i)} 
    options={state.options}
  />;