import React from 'react';
import Shapy from './Shapy';
import ColorPicker from './ColorPicker';
import Selector from './Selector';

const ShapyBuilder = ({ shapes, eyes, state }) =>
  <div>
    <Shapy shape={state.shape} color={state.color} eyes={state.eye} />
    <ColorPicker initialValue="#448DDD" onSelect={state.setColor} />
    <Selector options={shapes} onSelect={state.setShape} />
    <Selector options={eyes} onSelect={state.setEye} />
  </div>;

export default ShapyBuilder;