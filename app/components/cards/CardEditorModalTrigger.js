import React from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from '../ui/ButtonAdd';
import CardEditorContainer from '../../containers/CardEditorContainer';
import Modal from '../ui/Modal';

// добавляет дочернему компоненту пропc onClick для открытия модального окна карточки
const CardEditorModalTrigger = ({ cardId, children }) => (
  <Modal
    triggerRender={open => React.cloneElement(children, { onClick: open })}
  >
    <CardEditorContainer cardId={cardId} key={cardId} />
  </Modal>
);

CardEditorModalTrigger.propTypes = {
  cardId: PropTypes.string.isRequired,
  children: PropTypes.element
};

CardEditorModalTrigger.defaultProps = {
  children: <ButtonAdd />
};

export default CardEditorModalTrigger;
