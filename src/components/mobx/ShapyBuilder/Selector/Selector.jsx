import React from 'react';
import SvgString from '../../../common/SvgString';
import classnames from 'classnames';
import styles from './style';

const Selector = ({ state }) =>
  <div className={styles.selector}>
    {state.options.map((option, i) =>
      <button
        className={classnames(
          styles.option,
          {[styles.selected]: i === state.selectedIndex}
        )}
        key={i}
        onClick={() => state.select(i)}
      >
        <SvgString className={styles.svg} string={option} scale={0.33333} />
      </button>
    )}
  </div>;

export default Selector;