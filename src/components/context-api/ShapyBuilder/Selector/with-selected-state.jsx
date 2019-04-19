import React, { useState } from 'react';

export default Component => ({ onSelect, ...props }) => {
  const [ selected, setSelected ] = useState(0);

  return <Component selectedIndex={selected} onSelect={n => {
    onSelect(n);
    setSelected(n);
  }} {...props} />;
};