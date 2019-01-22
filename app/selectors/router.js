/**
 * Селекторы для router.
 * @module selectors:router
 */

/**
 * Выбирает текущий pathname.
 * @function
 * @param  {object} state   State redux'а.
 * @return {string}         Текущий урок pathname.
 */
export const getPathname = state => state.router.location.pathname; // eslint-disable-line import/prefer-default-export
