import React from 'react';
import ContextApiApp from '../context-api/ContextApiApp';
import MobxApp from '../mobx/MobxApp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './normalize.css';
import './style';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/context-api" component={ContextApiApp} />
      <Route exact path="/mobx" component={MobxApp} />
      <Route path="*" component={ContextApiApp} />
    </Switch>
  </BrowserRouter>;

export default App;