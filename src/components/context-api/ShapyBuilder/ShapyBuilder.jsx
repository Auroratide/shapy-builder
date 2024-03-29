import React, { useState } from 'react';
import Shapy from '../../common/Shapy';
import ColorPicker from '../../common/ColorPicker';
import Selector from './Selector';
import { withDelayedInitialValue } from './hooks';

const INITIAL_COLOR = '#448DDD';

const ShapyBuilder = ({ shapes, eyes }) => {
  const [ color, setColor ] = useState(INITIAL_COLOR);
  const [ shape, setShape ] = withDelayedInitialValue(() => shapes[0] || '', shapes).useState();
  const [ eye, setEye ] = withDelayedInitialValue(() => eyes[0] || '', eyes).useState();

  return <div>
    <Shapy shape={shape} color={color} eyes={eye} />
    <ColorPicker initialValue={INITIAL_COLOR} onSelect={setColor} />
    <Selector options={shapes} onSelect={n => setShape(shapes[n])} />
    <Selector options={eyes} onSelect={n => setEye(eyes[n])} />
  </div>;
};

ShapyBuilder.defaultProps = {
  shapes: [],
  eyes: []
};

export default ShapyBuilder;