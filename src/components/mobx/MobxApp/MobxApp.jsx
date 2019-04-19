import React from 'react';
import OptionsProvider from '../OptionsProvider';
import ShapyBuilder from '../ShapyBuilder';
import MainContainer from '../../common/MainContainer';

const MobxApp = () =>
  <OptionsProvider>
    <MainContainer>
      <h1>Shapy Builder!</h1>
      <h2>Using MobX</h2>
      <ShapyBuilder />
    </MainContainer>
  </OptionsProvider>;

export default MobxApp;