import React from 'react';
import SvgString from '../SvgString';
import styles from './style';

const Shapy = ({ shape, eyes, color }) =>
  <div className={styles.shapy}>
    <SvgString fill={color} string={shape} />
    <SvgString className={styles.eyes} string={eyes} />
  </div>;

  export default Shapy;