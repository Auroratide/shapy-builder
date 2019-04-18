import React from 'react';
import ContextApiApp from '../context-api/ContextApiApp';
import MobxApp from '../mobx/MobxApp';
import ReduxApp from '../redux/ReduxApp';
import { Switch, Route } from 'react-router-dom';

import './normalize.css';
import './style';

const App = () =>
  <Switch>
    <Route exact path="/context-api" component={ContextApiApp} />
    <Route exact path="/mobx" component={MobxApp} />
    <Route exact path="/redux" component={ReduxApp} />
    <Route path="*" component={ContextApiApp} />
  </Switch>;

export default App;