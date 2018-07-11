import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: change config arguments to your dsn
window.Raven.config("<YOUR_DSN>").install();
ReactDOM.render(<App />, document.getElementById('root'));
