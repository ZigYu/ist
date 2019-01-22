import { CARDS_UPSERT, CARDS_REMOVE } from '../actions/cards';
import { getUid } from '../utils';

function generateCardId(state) {
  const cardId = getUid('card');
  return state[cardId] ? generateCardId() : cardId;
}

export default function cards(state = {}, { type, payload }) {
  switch (type) {
    case CARDS_UPSERT: {
      const card = { ...payload };
      if (!card.cardId) card.cardId = generateCardId(state);
      return { ...state, [card.cardId]: card };
    }

    case CARDS_REMOVE: {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    }

    default:
      return state;
  }
}
