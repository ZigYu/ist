const path = require('path');
const {
  remote: { app }
} = require('electron');
const Store = require('electron-store');
const _ = require('lodash');
const initialState = require('./state.json');

const WHAT_SAVE = ['cards', 'config', 'lessons'];
let previousState = {};

const isProd = process.env.NODE_ENV === 'production';
const pathDirApp = isProd
  ? path.dirname(app.getPath('exe'))
  : path.join(__dirname, 'store');

const storeDirApp = new Store({ name: 'state', cwd: pathDirApp });
const storeDirUser = new Store({ name: 'state' });

const stateSaver = {
  subscribe(store) {
    store.subscribe(() => {
      const state = store.getState();

      for (let i = 0; i < WHAT_SAVE.length; i++) {
        const key = WHAT_SAVE[i];
        if (previousState[key] !== state[key]) {
          previousState = state;
          return writeStateFile(_.pick(state, WHAT_SAVE));
        }
      }
    });
  },
  getSaved() {
    return readStateFile();
  }
};

export default stateSaver;

const writeStateFile = _.debounce(data => {
  if (isProd) storeDirUser.set('state', data);
  storeDirApp.set('state', data);
}, 500);

function readStateFile() {
  const stateInUser = storeDirUser.get('state');
  const stateInApp = storeDirApp.get('state');

  return {
    ...initialState.state,
    ...(stateInUser || {}),
    ...(stateInApp || {})
  };
}
