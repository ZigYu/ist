import { wait } from '../app/utils';

describe('проверка методов модуля utils', () => {
  it('wait() - дожна быть пауза', done => {
    let counter = 0;
    const increment = () =>
      new Promise(resolve => {
        setTimeout(() => {
          counter += 1;
          resolve();
        });
      });

    setTimeout(() => expect(counter).toBe(0));

    setTimeout(() => {
      expect(counter).toBe(1);
      done();
    }, 50);

    wait(40)
      .then(increment())
      .catch(console.error);
  });
});
