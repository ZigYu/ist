export const CARDS_UPSERT = 'CARDS_UPSERT';
export const CARDS_REMOVE = 'CARDS_REMOVE';

export function upsert(card) {
  return {
    type: CARDS_UPSERT,
    payload: card
  };
}

export function remove(id) {
  return {
    type: CARDS_REMOVE,
    payload: id
  };
}
