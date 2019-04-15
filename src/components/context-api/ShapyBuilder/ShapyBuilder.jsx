import React, { useState, useEffect } from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';
import Selector from './Selector';

const ShapyBuilder = ({ shapes, eyes }) => {
  const [ color, setColor ] = useState('black');
  const [ shape, setShape ] = useState('');
  const [ eye, setEye ] = useState('');

  useEffect(() => {
    setShape(shapes[0]);
    setEye(eyes[0]);
  }, [shapes, eyes]);

  return <div>
    <Shapy shape={shape} color={color} eyes={eye} />
    <ColorPicker onSelect={setColor} />
    <Selector options={shapes} onSelect={setShape} />
    <Selector options={eyes} onSelect={setEye} />
  </div>;
};

ShapyBuilder.defaultProps = {
  shapes: [],
  eyes: []
};

export default ShapyBuilder;