import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

export default class InputNumber extends React.PureComponent {
  validate = v => {
    const { min, max, isOptional } = this.props;
    const valid = { isValid: true };

    if (isOptional && v === '') return valid;
    if (min && v < min) return { isValid: false, msg: `не менее ${min}` };
    if (max && v > max) return { isValid: false, msg: `не более ${max}` };
    return valid;
  };

  modify = v => (v === '' ? v : parseFloat(v));

  render() {
    return (
      <Input
        {...this.props}
        modify={this.modify}
        validate={this.validate}
        type="number"
      />
    );
  }
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
};

InputNumber.defaultProps = {
  label: '',
  onChange: () => {},
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER
};
