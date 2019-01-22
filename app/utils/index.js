import _ from 'lodash';
import Color from 'color';

/**
 * Модуль с вспомогательными функциями.
 * @module utils
 */

/**
 * Генерирует простой uid из 9 символов.
 * @param {string} prefix Префикс для id.
 * @return {string} Идентификатор с префиксом.
 * @example
 * utils.getUid('user'); //user_j3lctp9cv
 */
export function getUid(prefix) {
  if (!_.isString(prefix)) throw new Error('prefix не строка');
  const postfix = Math.random()
    .toString(36)
    .substr(2, 9);
  return `${prefix}${'_'}${postfix}`;
}

/**
 * Вызывает у элемента getBoundingClientRect. Добавляет свойства centerX, centerY.
 * @param  {Element} element DOM элемент.
 * @return {object}         Объект cо свойствами centerX, centerY, width, height,
 * left, right, top, bottom.
 */
export function getRect(element) {
  if (!_.isElement(element)) {
    throw new Error(`element не DOM элемент, получен ${element}`);
  }
  const rect = element.getBoundingClientRect();
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;

  return {
    centerX,
    centerY,
    width: rect.width,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    bottom: rect.bottom
  };
}

/**
 * Промисс - пауза, резолвится по истечении времени.
 * @param {number} delay Задержка в мс.
 */
export function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Цветовая схема.
 * @typedef {object} Colors
 * @property {string} lightest    Самый светлый цвет.
 * @property {string} light       Светлый цвет.
 * @property {string} dark        Темный цвет.
 * @property {string} darkest     Самый темный цвет.
 */

/**
 * Генерирует цветовую схему на основе базового цвета.
 * @param  {string} baseColor Базовый цвет.
 * @return {Colors}           Цветовая схема.
 */
export function generateColors(baseColor) {
  const color = Color(baseColor);

  function withLight(l) {
    const hsl = color.hsl().object();
    hsl.l = l;
    return Color(hsl)
      .hex()
      .toString();
  }

  return {
    lightest: withLight(97),
    light: withLight(90),
    dark: withLight(40),
    darkest: withLight(30)
  };
}

/**
 * Внедряет цвета в стили.
 * @param {Colors} colors   Цветовая схема.
 */
export function injectColors(colors) {
  const rule = `:root {
    --color-lightest: ${colors.lightest};
    --color-light: ${colors.light};
    --color-dark: ${colors.dark};
    --color-darkest: ${colors.darkest};
  }`;

  window.setStyleString(rule);
}
