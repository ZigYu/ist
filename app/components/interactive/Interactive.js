import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InteractiveProvider from '../../containers/InteractiveProvider';

export default class Interactive extends Component {
  render() {
    const { children, onDrop } = this.props;

    return (
      <InteractiveProvider onDrop={onDrop}>{children}</InteractiveProvider>
    );
  }
}

Interactive.propTypes = {
  children: PropTypes.node.isRequired,
  onDrop: PropTypes.func.isRequired
};
