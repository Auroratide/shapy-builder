import React from 'react';
import ContextApiApp from '../context-api/ContextApiApp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './normalize.css';
import './style';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/context-api" component={ContextApiApp} />
      <Route path="*" component={ContextApiApp} />
    </Switch>
  </BrowserRouter>;

export default App;