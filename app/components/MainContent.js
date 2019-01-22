import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.css';
import Animate, { Fade } from './Animate';

const MainContent = ({ children, pathname }) => (
  <Animate>
    <Fade key={pathname} className={styles.mainContent}>
      {children}
    </Fade>
  </Animate>
);

export default MainContent;

MainContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
