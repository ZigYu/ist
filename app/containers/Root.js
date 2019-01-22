import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ErrorBoundary from '../components/ErrorBoundary';
import AppContainer from './AppContainer';

// eslint-disable-next-line react/prop-types
export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <AppContainer />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
}
