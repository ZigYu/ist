import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import IconCrossAngle from '../icons/IconCrossAngle';
import Animate, { Appear } from '../Animate';

const style = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 1
};

export default function ButtonClose({ isOpen, ...props }) {
  return (
    <div style={style}>
      <Button {...props}>
        <Animate>
          {isOpen ? (
            <Appear key="closeIcon">
              <IconCrossAngle />
            </Appear>
          ) : null}
        </Animate>
      </Button>
    </div>
  );
}

ButtonClose.propTypes = {
  isTransparent: PropTypes.bool,
  isOpen: PropTypes.bool
};

ButtonClose.defaultProps = {
  isTransparent: true,
  isOpen: true
};
