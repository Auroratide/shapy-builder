import React from 'react';
import styles from './style';

const Shapy = ({ shape, eyes, color }) =>
  <div className={styles.shapy} style={{ backgroundColor: color }}></div>;

export default Shapy;