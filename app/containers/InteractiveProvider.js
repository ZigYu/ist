import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InteractiveContext = React.createContext();

export default class InteractiveProvider extends Component {
  state = {
    drag: {},
    drop: {}
  };

  onDragEnd = drag => this.setState({ drag });

  onDrop = drop => {
    const { onDrop } = this.props;
    this.setState({ drop });
    onDrop(drop);
  };

  render() {
    const { children } = this.props;
    const { drag, drop } = this.state;

    return (
      <InteractiveContext.Provider
        value={{
          drag,
          drop,
          onDragEnd: this.onDragEnd,
          onDrop: this.onDrop
        }}
      >
        {children}
      </InteractiveContext.Provider>
    );
  }
}

InteractiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onDrop: PropTypes.func.isRequired
};

export function InteractiveConsumer({ children }) {
  return (
    <InteractiveContext.Consumer>
      {props => React.cloneElement(children, props)}
    </InteractiveContext.Consumer>
  );
}

InteractiveConsumer.propTypes = {
  children: PropTypes.node.isRequired
};
