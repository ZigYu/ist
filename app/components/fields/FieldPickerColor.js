import React from 'react';
import Field from './Field';
import PickerColorCircle from '../inputs/PickerColorCircle';

const FieldPickerColor = () => (
  <Field>
    <PickerColorCircle name="baseColor" label="Базовый цвет темы" />
  </Field>
);

export default FieldPickerColor;
