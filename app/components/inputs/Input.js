import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';
import Animate, { Fade } from '../Animate';
import styles from './Input.css';

const cx = classNames.bind(styles);

export default class Input extends React.PureComponent {
  componentDidMount() {
    const { name, initialize, modify } = this.props;
    initialize({ name, modify, validate: this.validate });
  }

  onChange = e => {
    const { name, defineValue, onChange } = this.props;
    const value = defineValue ? defineValue(e) : e.target.value;
    onChange({ name, value });
  };

  validate = value => {
    const { validate, minLength, maxLength, isOptional } = this.props;

    if (value === '' && isOptional !== true) {
      return { isValid: false, msg: 'поле обязательное' };
    }
    if (value !== '' && minLength && value.length < minLength) {
      return { isValid: false, msg: `не менее ${minLength} символов` };
    }
    if (value !== '' && maxLength && value.length > maxLength) {
      return { isValid: false, msg: `не более ${maxLength} символов` };
    }

    return validate(value);
  };

  render() {
    const {
      name,
      label,
      style,
      value,
      isUncontrolled,
      isValid,
      msg,
      children
    } = this.props;
    const inputProps = _.pick(this.props, [
      'name',
      'title',
      'type',
      'min',
      'max'
    ]);

    const className = cx({
      input: true,
      invalid: isValid === false
    });

    return (
      <div className={className} style={style}>
        {label ? <h4>{label}</h4> : null}
        <input
          key={name}
          {...inputProps}
          value={isUncontrolled ? undefined : value}
          onChange={this.onChange}
        />
        <Animate>
          {msg ? (
            <Fade key={msg} className={styles.msg}>
              {msg}
            </Fade>
          ) : null}
          {children ? (
            <Fade key="children">
              {React.cloneElement(children, { value })}
            </Fade>
          ) : null}
        </Animate>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'file', 'range']).isRequired,
  name: PropTypes.string.isRequired,
  initialize: PropTypes.func, // инициализирует инпут в форме
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  children: PropTypes.element,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  isOptional: PropTypes.bool,
  isUncontrolled: PropTypes.bool,
  onChange: PropTypes.func,
  validate: PropTypes.func, // валидирует значение после ввода до modify
  modify: PropTypes.func // преобразует значение после валидации
};

Input.defaultProps = {
  initialize: () => throw new Error('Input требует initialize'),
  onChange: () => {},
  validate: () => ({ isValid: true }),
  modify: v => v,
  value: '',
  label: '',
  isOptional: false,
  isUncontrolled: false,
  children: null,
  minLength: 0,
  maxLength: 100000,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER
};
