import React from 'react';
import styles from './style';

const ColorPicker = ({ initialValue, onSelect }) =>
  <input
    type="color"
    className={styles['color-picker']}
    defaultValue={initialValue}
    onChange={e => onSelect(e.target.value)}
  />;

export default ColorPicker;