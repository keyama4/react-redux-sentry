import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ErrorBoundary from './error-boundary';

// TODO: change config arguments to your dsn
window.Raven.config("<YOUR_DSN>").install();
ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));
