import React, { useState } from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';
import Selector from './Selector';

const ShapyBuilder = () => {
  const [ color, setColor ] = useState('black');
  const [ shape, setShape ] = useState('circle');

  return <div>
    <Shapy shape={shape} color={color} />
    <ColorPicker onSelect={setColor} />
    <Selector options={['circle', 'square']} onSelect={setShape} />
  </div>;
}

export default ShapyBuilder;