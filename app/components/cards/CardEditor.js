import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CardEditor.css';
import Form from '../Form';
import ButtonSubmit from '../ui/ButtonSubmit';
import FieldCardWord from '../fields/FieldCardWord';
import FieldImage from '../fields/FieldImage';

export default class CardEditor extends Component {
  onSubmit = data => {
    const { upsert, modalClose } = this.props;
    upsert(data);
    modalClose();
  };

  render() {
    const { cards, cardId } = this.props;

    return (
      <div className={styles.cardEditor}>
        <h3>Редактирование карточки</h3>
        <Form onSubmit={this.onSubmit} defaultValues={cards[cardId]}>
          <FieldCardWord />
          <FieldImage />

          <ButtonSubmit>сохранить</ButtonSubmit>
        </Form>
      </div>
    );
  }
}

CardEditor.propTypes = {
  upsert: PropTypes.func.isRequired,
  cards: PropTypes.objectOf(PropTypes.object).isRequired,
  cardId: PropTypes.string.isRequired,
  modalClose: PropTypes.func
};

CardEditor.defaultProps = {
  modalClose: () => {}
};
