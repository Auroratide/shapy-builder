import React from 'react';
import Shapy from '../../common/Shapy';
import ColorPicker from '../../common/ColorPicker';
import Selector from '../../common/Selector';

const ShapyBuilder = ({
  shapes,
  eyes,
  color,
  selectedShapeIndex,
  selectedEyesIndex,
  updateColor,
  selectShape,
  selectEyes
}) =>
  <div>
    <Shapy shape={shapes[selectedShapeIndex]} color={color} eyes={eyes[selectedEyesIndex]} />
    <ColorPicker initialValue="#448DDD" onSelect={updateColor} />
    <Selector options={shapes} selectedIndex={selectedShapeIndex} onSelect={selectShape} />
    <Selector options={eyes} selectedIndex={selectedEyesIndex} onSelect={selectEyes} />
  </div>;

export default ShapyBuilder;