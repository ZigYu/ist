import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Field from './Field';
import Input from '../inputs/Input';
import styles from '../inputs/Input.css';

const validDataUrl = require('valid-data-url');

function defineValue(e) {
  return e.target.files && e.target.files[0];
}

function validate(file) {
  if (!file) return { isValid: this.props.isOptional };
  if (_.isString(file) && validDataUrl(file)) return { isValid: true };

  if (
    !['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(
      file.type
    )
  ) {
    return {
      isValid: false,
      msg: 'возможно загрузить только jpeg, png, gif, svg.'
    };
  }

  if (file.size >= 1024 * 1024 * 1) {
    return { isValid: false, msg: 'файл слишком большой, масимум 1 мб' };
  }

  return { isValid: true };
}

function modify(file) {
  if (_.isString(file) && validDataUrl(file)) return file;
  return new Promise(resolve => {
    const fr = new FileReader();
    fr.onload = ev => resolve(ev.target.result);
    fr.readAsDataURL(file);
  });
}

const FieldImage = () => (
  <Field>
    <Input
      isUncontrolled
      type="file"
      name="image"
      label="изображение"
      defineValue={defineValue}
      validate={validate}
      modify={modify}
    >
      <Image />
    </Input>
  </Field>
);

export default FieldImage;

const Image = ({ value }) =>
  value ? <img alt="" className={styles.image} src={value} /> : null;

Image.propTypes = {
  value: PropTypes.string
};

Image.defaultProps = {
  value: ''
};
