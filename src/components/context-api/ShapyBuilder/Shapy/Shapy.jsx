import React from 'react';
import styles from './style';

const createMarkup = (html) => ( {
  __html: html
} );

const Shapy = ({ shape, eyes, color }) =>
  <svg
    className={styles.shapy}
    width="200px"
    height="200px"
    fill={color}
    dangerouslySetInnerHTML={createMarkup(shape)}
  />;

export default Shapy;