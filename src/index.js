import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import App from './app';
import ErrorBoundary from './error-boundary';

// TODO: change config arguments to your dsn
window.Raven.config("<YOUR_DSN>").install();
ReactDOM.render(
  <Provider store={reduxStore}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
