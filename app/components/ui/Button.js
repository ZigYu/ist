import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

export default class Button extends React.PureComponent {
  onClick = e => {
    const { onClick } = this.props;
    e.stopPropagation();
    onClick(e);
  };

  render() {
    const { children, isTransparent, title, disabled } = this.props;

    return (
      <button
        type="button"
        title={title}
        disabled={disabled}
        className={cx({
          button: true,
          transparent: isTransparent
        })}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isTransparent: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  title: '',
  isTransparent: false,
  disabled: false
};
