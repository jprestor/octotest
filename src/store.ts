import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

import { Dispatch, AnyAction } from 'redux';

// Примеры Middleware
const stringMiddleware = (/*{ dispatch, getState }*/) => (next: Dispatch) => (
  action: AnyAction
) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddlewar)
);

export default store;
