import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './style';

const Selector = ({ options, onSelect }) => {
  const [ selected, setSelected ] = useState(0);

  return <div>
    {options.map((option, i) =>
      <span
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
        {option}
      </span>
    )}
  </div>;
};

Selector.defaultProps = {
  options: []
};

export default Selector;