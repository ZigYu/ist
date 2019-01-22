import React from 'react';
import Field from './Field';
import InputNumberSlider from '../inputs/InputNumberSlider';

const FieldVolumeMusic = () => (
  <Field>
    <InputNumberSlider name="volumeMusic" label="Громкость музыки" />
  </Field>
);

export default FieldVolumeMusic;
