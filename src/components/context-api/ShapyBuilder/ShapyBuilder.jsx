import React, { useState } from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';
import Selector from './Selector';

const ShapyBuilder = ({ shapes, eyes }) => {
  const [ color, setColor ] = useState('black');
  const [ shape, setShape ] = useState('circle');
  const [ eye, setEye ] = useState('??');

  return <div>
    <Shapy shape={shape} color={color} eyes={eye} />
    <ColorPicker onSelect={setColor} />
    <Selector options={shapes} onSelect={setShape} />
    <Selector options={eyes} onSelect={setEye} />
  </div>;
};

export default ShapyBuilder;