import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
//import {default as createHistory} from 'history/lib/createBrowserHistory';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
