import React from 'react';
import { InteractiveConsumer } from '../../containers/InteractiveProvider';
import DropZone from './DropZone';

export default function InteractiveDropZone({ children, ...props }) {
  return (
    <InteractiveConsumer>
      <DropZone {...props}>{children}</DropZone>
    </InteractiveConsumer>
  );
}
