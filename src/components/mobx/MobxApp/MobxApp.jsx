import React from 'react';
import DataProvider from '../DataProvider';
import ShapyBuilder from '../ShapyBuilder';
import MainContainer from '../MainContainer';

const MobxApp = () =>
  <DataProvider>
    <MainContainer>
      <h1>Shapy Builder!</h1>
      <h2>Using MobX</h2>
      <ShapyBuilder />
    </MainContainer>
  </DataProvider>;

export default MobxApp;