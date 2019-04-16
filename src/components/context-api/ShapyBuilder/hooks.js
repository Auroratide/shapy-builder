import { useState, useEffect } from 'react';

export const withDelayedInitialValue = (set, dependency) => {
  const [ state, setState ] = useState(set());

  useEffect(() => setState(set()), [dependency]);

  return {
    useState: () => [ state, setState ]
  };
};