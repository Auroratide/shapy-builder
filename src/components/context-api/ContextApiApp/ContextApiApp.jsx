import React from 'react';
import ShapyOptions from '../ShapyOptions';
import ShapyBuilder from '../ShapyBuilder';
import MainContainer from '../MainContainer';

const ContextApiApp = () =>
  <ShapyOptions.Provider>
    <MainContainer>
      <h1>Shapy Builder!</h1>
      <h2>Using React Context API and Hooks</h2>
      <ShapyOptions.Consumer>{({ query }) =>
        <ShapyBuilder shapes={query.shapes()} eyes={query.eyes()} />
      }</ShapyOptions.Consumer>
    </MainContainer>
  </ShapyOptions.Provider>;

export default ContextApiApp;