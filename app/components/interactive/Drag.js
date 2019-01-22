import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { getRect } from '../../utils';

const Box = posed.div({
  draggable: true,
  hoverable: true,
  hover: { scale: 1.05 },
  init: { scale: 1 },
  drag: { scale: 1.1 },
  dragEnd: { transition: { type: 'spring', delay: 400 } }
});

export default class Drag extends Component {
  boxRef = createRef();

  onDragEnd = () => {
    const { onDragEnd, dragId } = this.props;

    const { centerX, centerY } = getRect(this.boxRef.current);
    onDragEnd({ centerX, centerY, dragId });
  };

  render() {
    const { children } = this.props;

    return (
      <Box
        style={{ position: 'relative' }}
        ref={this.boxRef}
        onDragEnd={this.onDragEnd}
      >
        {children}
      </Box>
    );
  }
}

Drag.propTypes = {
  dragId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDragEnd: PropTypes.func
};

Drag.defaultProps = {
  onDragEnd: () => {}
};
