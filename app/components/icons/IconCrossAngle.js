import React from 'react';
import PropTypes from 'prop-types';

export default function IconCrossAngle({ className }) {
  return (
    <svg
      className={`icon ${className}`}
      style={{ transform: 'rotate(45deg)' }}
      height="24"
      width="24"
      viewBox="0 0 128 128"
    >
      <g>
        <polygon points="127,59 69,59 69,1 59,1 59,59 1,59 1,69 59,69 59,127 69,127 69,69 127,69   " />
      </g>
    </svg>
  );
}

IconCrossAngle.propTypes = {
  className: PropTypes.string
};

IconCrossAngle.defaultProps = {
  className: ''
};
