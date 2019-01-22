import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { getRect } from '../../utils';

export default class DropZone extends Component {
  componentDidUpdate(prevProps) {
    const { drag, onDrop, dropId } = this.props;

    if (prevProps.drag !== drag) {
      const { width, height, centerX, centerY, left, right } = getRect(
        this.dropZoneRef.current
      );
      const maxDelta = Math.min(width / 2, height / 2);

      if (
        Math.abs(centerX - drag.centerX) < maxDelta &&
        Math.abs(centerY - drag.centerY) < maxDelta
      ) {
        onDrop({ dragId: drag.dragId, dropId, dropX: left, dropY: right });
      }
    }
  }

  dropZoneRef = createRef();

  render() {
    const { children } = this.props;

    return <div ref={this.dropZoneRef}>{children}</div>;
  }
}

DropZone.propTypes = {
  drag: PropTypes.shape({
    centerX: PropTypes.number,
    centerY: PropTypes.number,
    dragId: PropTypes.string
  }),
  dropId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDrop: PropTypes.func
};

DropZone.defaultProps = {
  drag: {
    centerX: 0,
    centerY: 0,
    dragId: ''
  },
  onDrop: () => {}
};
