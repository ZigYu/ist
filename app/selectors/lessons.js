import _ from 'lodash';

/**
 * Селекторы для lessons.
 * @module selectors:lessons
 */

/**
 * Выбирает текущий урок используя router.
 * @function
 * @param  {object} state   State redux'а.
 * @return {object}         Текущий урок или пустой объект.
 */
export const getCurrentLesson = ({ lessons, router }) => {
  const lesson = _.find(
    lessons,
    ({ path }) => path === router.location.pathname
  );
  return lesson || {};
};
