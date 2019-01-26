import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.css';
import Animate, { TopIn } from './Animate';

const MainContent = ({ children, pathname }) => (
  <Animate>
    <TopIn key={pathname} className={styles.mainContent}>
      {children}
    </TopIn>
  </Animate>
);

export default MainContent;

MainContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
