import React from 'react';
import SvgString from '../SvgString';
import classnames from 'classnames';
import styles from './style';

const Selector = ({ options, selectedIndex, onSelect }) =>
  <div className={styles.selector}>
    {options.map((option, i) =>
      <button
        className={classnames(
          styles.option,
          {[styles.selected]: i === selectedIndex}
        )}
        key={i}
        onClick={() => onSelect(i)}
      >
        <SvgString className={styles.svg} string={option} scale={0.33333} />
      </button>
    )}
  </div>;

export default Selector;