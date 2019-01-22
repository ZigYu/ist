import React from 'react';
import { render } from 'react-dom';
import { AppContainer as AppContainerHotLoader } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import stateSaver from './store/stateSaver';
import './app.global.css';

const store = configureStore(stateSaver.getSaved());
stateSaver.subscribe(store);

render(
  <AppContainerHotLoader>
    <Root store={store} history={history} />
  </AppContainerHotLoader>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainerHotLoader>
        <NextRoot store={store} history={history} />
      </AppContainerHotLoader>,
      document.getElementById('root')
    );
  });
}
