import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import IconCrossAngle from '../icons/IconCrossAngle';

export default function ButtonClose({ ...props }) {
  return (
    <Button {...props}>
      <IconCrossAngle />
    </Button>
  );
}

ButtonClose.propTypes = {
  isTransparent: PropTypes.bool
};

ButtonClose.defaultProps = {
  isTransparent: true
};
