import React, { useState } from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';
import Selector from './Selector';
import { withDelayedInitialValue } from './hooks';

const ShapyBuilder = ({ shapes, eyes }) => {
  const [ color, setColor ] = useState('black');
  const [ shape, setShape ] = withDelayedInitialValue(() => shapes[0] || '', shapes).useState();
  const [ eye, setEye ] = withDelayedInitialValue(() => eyes[0] || '', eyes).useState();

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