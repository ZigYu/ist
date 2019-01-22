import { CONFIG_UPDATE } from '../actions/config';

export default function cards(state = {}, { type, payload }) {
  switch (type) {
    case CONFIG_UPDATE:
      return { ...state, ...payload };

    default:
      return state;
  }
}
