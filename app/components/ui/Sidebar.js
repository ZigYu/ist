import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.css';
import Animate, { Appear, createPosed } from '../Animate';
import IconHamburger from '../icons/IconHamburger';
import Button from './Button';
import ButtonClose from './ButtonClose';

const cx = classNames.bind(styles);

export const SidebarBox = createPosed({
  open: {
    width: '300px',
    staggerChildren: 50,
    transition: { ease: [0.37, 0.85, 0.53, 0.77], duration: 500 }
  },
  closed: {
    width: '0px',
    transition: { ease: [0.37, 0.85, 0.53, 0.77], duration: 500 }
  }
});

export default class Sidebar extends Component {
  state = { isOpen: false };

  toggleIsOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { children, position, theme } = this.props;

    const className = cx(theme, {
      sidebar: true,
      left: position === 'left',
      right: position === 'right'
    });

    return (
      <SidebarBox className={className} pose={isOpen ? 'open' : 'closed'}>
        <ButtonOpen
          {...this.props}
          isOpen={isOpen}
          onClick={this.toggleIsOpen}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <ButtonClose
              className={styles.buttonClose}
              isOpen={isOpen}
              onClick={this.toggleIsOpen}
            />
            {children}
          </div>
        </div>
      </SidebarBox>
    );
  }
}

Sidebar.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  openIcon: PropTypes.element
};

Sidebar.defaultProps = {
  openIcon: <IconHamburger />
};

function ButtonOpen({ onClick, isOpen, openIcon }) {
  return (
    <div className={styles.buttonOpen}>
      <Button isTransparent onClick={onClick}>
        <Animate>
          {isOpen ? null : <Appear key="openIcon">{openIcon}</Appear>}
        </Animate>
      </Button>
    </div>
  );
}

ButtonOpen.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openIcon: PropTypes.element.isRequired
};
