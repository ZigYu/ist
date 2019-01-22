import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Cards.css';
import WorkArea from '../WorkArea';
import Card from './Card';
import CardEditorModalTrigger from './CardEditorModalTrigger';

export default class Cards extends Component {
  render() {
    const { cards, remove } = this.props;

    return (
      <WorkArea>
        <div className={styles.cards}>
          <div className={styles.header}>
            <h3>Карточки</h3>
          </div>

          {Object.values(cards).map(card => (
            <Card key={card.cardId} {...card} remove={remove} />
          ))}

          <div className={styles.createCardButton}>
            <CardEditorModalTrigger cardId="creator" />
          </div>
        </div>
      </WorkArea>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.objectOf(
    PropTypes.shape({
      cardId: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  ).isRequired,
  upsert: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};
