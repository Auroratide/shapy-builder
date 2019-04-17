import React from 'react';
import Shapy from '../../common/Shapy';
import ColorPicker from '../../common/ColorPicker';
import Selector from './Selector';

const ShapyBuilder = ({ state }) =>
  <div>
    <Shapy shape={state.shape} color={state.color} eyes={state.eyes} />
    <ColorPicker initialValue="#448DDD" onSelect={state.setColor} />
    <Selector state={state.shapeSelector} />
    <Selector state={state.eyesSelector} />
  </div>;

export default ShapyBuilder;