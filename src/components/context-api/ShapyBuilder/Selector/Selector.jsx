import React, { useState } from 'react';
import SvgString from '../SvgString';
import classnames from 'classnames';
import styles from './style';

const Selector = ({ options, onSelect }) => {
  const [ selected, setSelected ] = useState(0);

  return <div>
    {options.map((option, i) =>
      <button
        className={classnames(
          styles.option,
          {[styles.selected]: i === selected}
        )}
        key={i}
        onClick={() => {
          setSelected(i);
          onSelect(option);
        }}
      >
        <SvgString string={option} scale={0.5} />
      </button>
    )}
  </div>;
};

Selector.defaultProps = {
  options: []
};

export default Selector;