import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.css';
import Animate, { createPosed } from '../Animate';
import ButtonClose from './ButtonClose';

const ModalBox = createPosed({
  enter: {
    staggerChildren: 200
  },
  exit: {
    staggerChildren: 200
  }
});

const BackgroundBox = createPosed({
  enter: {
    opacity: 0.5,
    transition: { duration: 50 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 50 }
  }
});

const ContentBox = createPosed({
  enter: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 30, duration: 100 }
    }
  },
  exit: {
    opacity: 0,
    y: -70,
    x: 0,
    transition: {
      opacity: { duration: 100 }
    }
  }
});

export default class Modal extends Component {
  state = { isOpen: false };

  isOpenToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { children, triggerRender } = this.props;

    return (
      <React.Fragment>
        <Animate>
          {isOpen ? (
            <ModalBox className={styles.modal} key="TEST">
              <BackgroundBox
                className={styles.background}
                onClick={this.isOpenToggle}
              />
              <ContentBox className={styles.content}>
                <div className={styles.buttonClose}>
                  <ButtonClose onClick={this.isOpenToggle} />
                </div>
                {React.cloneElement(children, {
                  modalClose: this.isOpenToggle
                })}
              </ContentBox>
            </ModalBox>
          ) : null}
        </Animate>
        <div>{triggerRender(this.isOpenToggle)}</div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  triggerRender: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
