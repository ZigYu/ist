import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './ui/Button';

function toHome() {
  window.location.href = `file://${__dirname}/app.html`;
}

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    console.error('error', error);
    return { hasError: true };
  }

  state = { hasError: false };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div style={{ padding: '10%' }}>
          <h3>Произошла ошибка.</h3>
          <Button onClick={toHome}>на главную</Button>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};
