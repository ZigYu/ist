import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

export default class InputNumberSlider extends React.PureComponent {
  modify = v => (v === '' ? v : parseFloat(v));

  onChange = data => {
    const { onChange } = this.props;
    if (onChange) onChange(data);
  };

  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        modify={this.modify}
        type="range"
      >
        <Percentage />
      </Input>
    );
  }
}

InputNumberSlider.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
};

InputNumberSlider.defaultProps = {
  onChange: () => {},
  min: 0,
  max: 100
};

function Percentage({ value }) {
  return <div>{value}</div>;
}

Percentage.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Percentage.defaultProps = {
  value: ''
};
