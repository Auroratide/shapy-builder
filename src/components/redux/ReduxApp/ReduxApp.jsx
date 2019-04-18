import React from 'react';
import { Provider } from 'react-redux';
import OptionsProvder from '../OptionsProvider';
import store from './store';
import MainContainer from '../../common/MainContainer';
import ShapyBuilder from '../ShapyBuilder';

const ReduxApp = () =>
  <Provider store={store}>
    <OptionsProvder>
      <MainContainer>
        <h1>Shapy Builder!</h1>
        <h2>Using Redux</h2>
        <ShapyBuilder />
      </MainContainer>
    </OptionsProvder>
  </Provider>;

export default ReduxApp;