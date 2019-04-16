import React from 'react';

const ColorPicker = ({ initialValue, onSelect }) =>
  <input type="color" defaultValue={initialValue} onChange={e => onSelect(e.target.value)} />;

export default ColorPicker;