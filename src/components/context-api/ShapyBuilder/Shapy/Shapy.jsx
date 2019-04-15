import React from 'react';
import SvgString from '../SvgString';
import styles from './style';

const Shapy = ({ shape, eyes, color }) =>
  <SvgString className={styles.shapy} fill={color} string={shape} />;

  export default Shapy;