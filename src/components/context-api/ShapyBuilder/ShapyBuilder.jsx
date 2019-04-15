import React, { useState } from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';

const ShapyBuilder = () => {
  const [ color, setColor ] = useState('black');

  return <div>
    <Shapy color={color} />
    <ColorPicker onSelect={setColor} />
  </div>;
}

export default ShapyBuilder;