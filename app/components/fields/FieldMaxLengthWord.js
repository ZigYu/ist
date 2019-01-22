import React from 'react';
import Field from './Field';
import InputNumber from '../inputs/InputNumber';

const FieldMaxLengthWord = () => (
  <Field>
    <InputNumber
      isOptional
      name="filterMaxLengthWord"
      label="Максимальная длина слова"
      min={3}
      max={20}
    />
  </Field>
);

export default FieldMaxLengthWord;
