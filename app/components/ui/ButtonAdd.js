import React from 'react';
import Button from './Button';
import IconCross from '../icons/IconCross';

const ButtonAdd = props => (
  <Button isTransparent {...props}>
    <IconCross />
  </Button>
);

export default ButtonAdd;
