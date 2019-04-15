import React from 'react';

const ColorPicker = ({ onSelect }) =>
  <input type="color" onChange={e => onSelect(e.target.value)} />;

export default ColorPicker;