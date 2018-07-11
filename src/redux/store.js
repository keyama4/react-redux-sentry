import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createRavenMiddleware from "raven-for-redux";
import reducers from './reducers';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    setImmediate(() => {
      throw error;
    });
  }
});
const middleware = [sagaMiddleware, createRavenMiddleware(window.Raven)];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

sagaMiddleware.run(saga);

export default reduxStore;
