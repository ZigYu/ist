import React from 'react';
import { InteractiveConsumer } from '../../containers/InteractiveProvider';
import Drag from './Drag';

export default function InteractiveDrag({ children, ...props }) {
  return (
    <InteractiveConsumer>
      <Drag {...props}>{children}</Drag>
    </InteractiveConsumer>
  );
}
