import React from 'react';
import Field from './Field';
import InputNumberSlider from '../inputs/InputNumberSlider';

const FieldVolumeSound = () => (
  <Field>
    <InputNumberSlider name="volumeSound" label="Громкость звуков" />
  </Field>
);

export default FieldVolumeSound;
