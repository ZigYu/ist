import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './WorkArea.css';

function getBackgroundPath(imageName) {
  const base = new URL(process.env.EXTRA_RESOURCES_PATH);
  return `url(${base}/backgrounds/${imageName}.png)`;
}

export default class WorkArea extends Component {
  render() {
    const { children, backgroundImage, backgroundColor } = this.props;
    const style = {};
    style.backgroundImage = getBackgroundPath(backgroundImage);

    if (backgroundColor) style.backgroundColor = backgroundColor;

    return (
      <div style={style} className={styles.workArea}>
        {children}
      </div>
    );
  }
}

WorkArea.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string
};

WorkArea.defaultProps = {
  backgroundImage: 'work',
  backgroundColor: ''
};
