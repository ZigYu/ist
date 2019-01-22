import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonDelete from '../ui/ButtonDelete';
import CardEditorModalTrigger from './CardEditorModalTrigger';
import CardImage from './CardImage';
import styles from './Card.css';

export default class Card extends Component {
  remove = () => {
    const { remove, cardId } = this.props;
    remove(cardId);
  };

  render() {
    const { cardId, word, image } = this.props;

    return (
      <CardEditorModalTrigger cardId={cardId}>
        <div className={styles.card}>
          <h3>{word}</h3>
          {image ? <CardImage style={{ height: 70 }} image={image} /> : null}
          <div className={styles.footer}>
            <ButtonDelete onClick={this.remove} />
          </div>
        </div>
      </CardEditorModalTrigger>
    );
  }
}

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired
};
