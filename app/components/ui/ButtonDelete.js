import React from 'react';
import IconTrash from '../icons/IconTrash';
import Button from './Button';

const ButtonDelete = props => (
  <Button title="удалить" isTransparent {...props}>
    <IconTrash />
  </Button>
);

export default ButtonDelete;
