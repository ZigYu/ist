import React from 'react';
import Field from './Field';
import Input from '../inputs/Input';

function modify(word) {
  return word.toLowerCase();
}

const FieldCardWord = () => (
  <Field>
    <Input
      type="text"
      name="word"
      label="ключевое слово"
      minLength={3}
      maxLength={30}
      modify={modify}
    />
  </Field>
);

export default FieldCardWord;
