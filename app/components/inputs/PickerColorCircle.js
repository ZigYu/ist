import PropTypes from 'prop-types';
import React from 'react';
import { CirclePicker } from 'react-color';

const COLORS = ['#c1c1c1', '#0E79B2', '#7EBF98', '#B15E6C', '#F4BB86'];

export default class PickerColorCircle extends React.PureComponent {
  componentDidMount() {
    const { name, initialize } = this.props;
    initialize({ name });
  }

  onChange = ({ hex }) => {
    const { name, onChange } = this.props;
    onChange({ name, value: hex });
  };

  render() {
    const { label, value } = this.props;

    return (
      <div>
        {label ? <h4>{label}</h4> : null}
        <CirclePicker
          color={value}
          onChange={this.onChange}
          width="200px"
          circleSize={20}
          colors={COLORS}
        />
      </div>
    );
  }
}

PickerColorCircle.propTypes = {
  name: PropTypes.string.isRequired,
  initialize: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
};

PickerColorCircle.defaultProps = {
  initialize: () => throw new Error('Input требует initialize'),
  onChange: () => {},
  value: '',
  label: ''
};
