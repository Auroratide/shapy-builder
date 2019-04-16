import React from 'react';
import SvgString from '../SvgString';
import styles from './style';

const Shapy = ({ shape, eyes, color }) =>
  <div className={styles.shapy}>
    <SvgString fill={color} string={shape} scale={1.3333} />
    <SvgString className={styles.eyes} string={eyes} scale={1.3333} />
  </div>;

  export default Shapy;