import React from 'react';
import Field from './Field';
import Input from '../inputs/Input';

const FieldFilterWord = () => (
  <Field>
    <Input
      isOptional
      type="text"
      name="filterWord"
      label="Фильтрация по части слова"
      minLength={0}
      maxLength={30}
    />
  </Field>
);

export default FieldFilterWord;
