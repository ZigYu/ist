import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import _ from 'lodash';
import styles from './Sidebar.css';
import Animate, { createPosed } from '../Animate';
import Button from './Button';
import ButtonClose from './ButtonClose';

const cx = classNames.bind(styles);

const boxConfigLeft = {
  open: {
    x: 0,
    staggerChildren: 50,
    transition: { type: 'tween' }
  },
  closed: {
    x: -300,
    transition: { type: 'tween' }
  }
};

const SidebarBoxLeft = createPosed(boxConfigLeft);

const boxConfigRight = _.merge({}, boxConfigLeft);
boxConfigRight.closed.x = 300;
const SidebarBoxRight = createPosed(boxConfigRight);

const SidebarFadeBox = createPosed({
  enter: { opacity: 0.2 },
  exit: { opacity: 0 }
});

const SidebarContext = React.createContext();

const commonState = {
  onClickFadeCallbacks: [],
  onClickFade(cb) {
    commonState.onClickFadeCallbacks.push(cb);
    return () => {
      commonState.onClickFadeCallbacks = commonState.onClickFadeCallbacks.filter(
        cbInState => cbInState !== cb
      );
    };
  },
  clickFade() {
    commonState.onClickFadeCallbacks.forEach(cb => cb());
  }
};

export default class Sidebar extends Component {
  state = { isOpen: false };

  componentDidMount() {
    this.removeOnClickFade = commonState.onClickFade(this.close);
  }

  componentWillUnmount() {
    this.removeOnClickFade();
  }

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children, position } = this.props;
    const pose = isOpen ? 'open' : 'closed';
    const SidebarBox = position === 'right' ? SidebarBoxRight : SidebarBoxLeft;

    const className = cx({
      sidebar: true,
      left: position === 'left',
      right: position === 'right'
    });

    return (
      <SidebarContext.Provider
        value={{
          isOpen,
          open: this.open
        }}
      >
        <React.Fragment>
          <Animate>
            {isOpen ? (
              <SidebarFadeBox
                key="sidebarFade"
                className={styles.fade}
                onClick={commonState.clickFade}
              />
            ) : null}
          </Animate>

          <SidebarBox className={className} pose={pose}>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <div className={styles.buttonClose}>
                  <ButtonClose onClick={this.close} />
                </div>
                {children}
              </div>
            </div>
          </SidebarBox>
        </React.Fragment>
      </SidebarContext.Provider>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired
};

export function ButtonSidebar({ children }) {
  return (
    <SidebarContext.Consumer>
      {({ open, isOpen }) => (
        <div className={styles.buttonOpenContainer}>
          {React.Children.map(children, child => {
            if (!child) return child;
            return (
              <div className={styles.buttonOpen}>
                <Button isTransparent onClick={open}>
                  {React.cloneElement(child, { isOpen })}
                </Button>
              </div>
            );
          })}
        </div>
      )
      // <Animate>
      //   {isOpen ? null : <Appear key="openIcon">{openIcon}</Appear>}
      // </Animate>
      }
    </SidebarContext.Consumer>
  );
}

ButtonSidebar.propTypes = {
  children: PropTypes.node.isRequired
};
