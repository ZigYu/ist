import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardImage.css';

export default function CardImage({ image, style }) {
  return (
    <div style={style} className={styles.cardImage}>
      <img src={image} alt="" />
    </div>
  );
}

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  style: PropTypes.shape({
    height: PropTypes.number
  })
};
