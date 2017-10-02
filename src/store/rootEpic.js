import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { authEpic } from './auth/middleware';

const combinedEpics = combineEpics(
  authEpic,
);

const rootEpic = createEpicMiddleware(combinedEpics);

export default rootEpic;
