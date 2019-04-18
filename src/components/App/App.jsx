import React from 'react';
import ContextApiApp from '../context-api/ContextApiApp';
import MobxApp from '../mobx/MobxApp';
import ReduxApp from '../redux/ReduxApp';
import { Switch, Route, Link } from 'react-router-dom';

import './normalize.css';
import styles from './style';

const App = () =>
  <React.Fragment>
    <header className={styles.header}>
      <nav>
        <Link className={styles.link} to="/context-api">Context API</Link>
        <Link className={styles.link} to="/mobx">MobX</Link>
        <Link className={styles.link} to="/redux">Redux</Link>
      </nav>
    </header>
    <Switch>
      <Route exact path="/context-api" component={ContextApiApp} />
      <Route exact path="/mobx" component={MobxApp} />
      <Route exact path="/redux" component={ReduxApp} />
      <Route path="*" component={ContextApiApp} />
    </Switch>
  </React.Fragment>;

export default App;