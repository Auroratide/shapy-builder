import React from 'react';

export default class OptionsProvider extends React.Component {
  componentDidMount() {
    this.props.fetchOptions();
  }

  render() {
    return this.props.children;
  }
};