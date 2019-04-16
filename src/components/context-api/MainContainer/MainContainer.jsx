import React from 'react';
import styles from './style';

export const MainContainer = ({ children }) =>
  <main className={styles.container}>
    {children}
  </main>;

export default MainContainer;