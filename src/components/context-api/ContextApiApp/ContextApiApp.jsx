import React from 'react';
import OptionsProvider from '../OptionsProvider';
import ShapyBuilder from '../ShapyBuilder';
import MainContainer from '../../common/MainContainer';

const ContextApiApp = () =>
  <OptionsProvider.Provider>
    <MainContainer>
      <h1>Shapy Builder!</h1>
      <h2>Using React Context API and Hooks</h2>
      <OptionsProvider.Consumer>{({ query }) =>
        <ShapyBuilder shapes={query.shapes()} eyes={query.eyes()} />
      }</OptionsProvider.Consumer>
    </MainContainer>
  </OptionsProvider.Provider>;

export default ContextApiApp;