import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

export default function App({ children }) {
  return <div className={styles.app}>{children}</div>;
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
