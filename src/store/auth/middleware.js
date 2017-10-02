import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import * as ajax from '../../utils/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as fromAuth from './';

const checkAuthWithCaptcha = (action$) => {
  return action$
    .ofType(fromAuth.AUTH_WITH_CAPTCHA.pending)
    .switchMap((action) => 
      console.log(action) ||
      ajax.post('/prq/authentication/captcha')
        .map(() => fromAuth.authWithCaptcha.success())
        .catch(error => Observable.of(fromAuth.authWithCaptcha.fail(error)))
    );
};

const checkAuthWithRegistration = (action$) => {
  return action$
    .ofType(fromAuth.AUTH_WITH_REGISTRATION.pending)
    .switchMap(({ payload }) => 
      ajax.post('/prq/authentication/registrationNumber', payload)
        .map(() => fromAuth.authWithRegistrationSuccess(payload))
        .catch(error => Observable.of(fromAuth.authWithRegistrationFail(error)))
    );
};

const checkAuthWithClient = (action$) => {
  return action$
    .ofType(fromAuth.AUTH_WITH_CLIENT.pending)
    .switchMap(({ payload }) => 
      ajax.post('/prq/authentication/clientId', payload)
        .map(() => fromAuth.authWithClientSuccess(payload))
        .catch(error => Observable.of(fromAuth.authWithClientFail(error)))
    );
};

export const authEpic = combineEpics(
  checkAuthWithCaptcha,
  checkAuthWithRegistration,
  checkAuthWithClient,
);