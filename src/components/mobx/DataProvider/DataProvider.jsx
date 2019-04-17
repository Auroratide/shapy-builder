import React from 'react';
import { Provider } from 'mobx-react';
import Store from './store';

export default class DataProvider extends React.Component {
  componentDidMount() {
    this.props.store.refresh();
  }

  render() {
    return <Provider store={this.props.store}>
      {this.props.children}
    </Provider>;
  }
};

DataProvider.defaultProps = {
  store: new Store()
};