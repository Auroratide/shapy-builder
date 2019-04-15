import React from 'react';
import classnames from 'classnames';
import styles from './style';

const Shapy = ({ shape, eyes, color }) =>
  <div className={classnames(styles.shapy, styles[shape])} style={{ backgroundColor: color }}></div>;

export default Shapy;