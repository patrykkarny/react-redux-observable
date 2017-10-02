import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(rootEpic),
  )
);

export default store;
