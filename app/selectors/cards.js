import { createSelector } from 'reselect';
import { getCurrentLesson } from './lessons';

/**
 * Селекторы для cards.
 * @module selectors:cards
 */

/**
 * Выбирает все карточки.
 * @function
 * @param  {object} state   State redux'а.
 * @return {object}         Объект с карточками.
 */
const getCards = state => state.cards;

/**
 * Выбирает параметры активного урока.
 * @function
 * @param  {object} state   State redux'а.
 * @return {object}         Объект с параметрами.
 */
const getCurrentLessonParameters = state => getCurrentLesson(state).parameters;

/**
 * Фильтрует карточки согласно параметрам урока.
 * @function
 * @param  {object} state   State redux'а.
 * @return {object}         Объект с отфильтрованными карточками.
 */
export const getFilteredCards = createSelector(
  [getCurrentLessonParameters, getCards],
  (parameters = {}, cards) => {
    const { filterWord, filterMaxLengthWord } = parameters;

    const filtered = {};

    Object.values(cards).forEach(card => {
      const { word, cardId } = card;
      if (filterWord && !word.includes(filterWord)) return;
      if (filterMaxLengthWord && word.length > filterMaxLengthWord) return;
      filtered[cardId] = card;
    });

    return filtered;
  }
);
