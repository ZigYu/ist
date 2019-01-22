import { LESSON_UPDATE } from '../actions/lessons';

export default function lessons(state = {}, { type, payload }) {
  switch (type) {
    case LESSON_UPDATE: {
      const { id } = payload;

      return {
        ...state,
        [id]: { ...state[id], ...payload }
      };
    }

    default:
      return state;
  }
}
