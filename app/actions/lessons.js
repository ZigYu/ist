export const LESSON_UPDATE = 'LESSON_UPDATE';

export function update(lesson) {
  return {
    type: LESSON_UPDATE,
    payload: lesson
  };
}
