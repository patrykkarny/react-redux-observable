const asyncTypeCreator = (type) => ({ 
  pending: `${type}_PENDING`,
  success: `${type}_SUCCESS`,
  fail : `${type}_FAIL`,
});

const asyncActionCreator = (type) => ({
  pending: (payload = {}) => ({ type: type.pending, payload }),
  success: (payload = {}) => ({ type: type.success, payload }),
  fail: (payload = {}) => ({ type: type.fail, payload }),
})


export const AUTH_WITH_CAPTCHA = asyncTypeCreator('AUTH_WITH_CAPTCHA');
export const authWithCaptcha = asyncActionCreator(AUTH_WITH_CAPTCHA);

export const AUTH_WITH_REGISTRATION = asyncTypeCreator('AUTH_WITH_REGISTRATION');
export const AUTH_WITH_CLIENT = asyncTypeCreator('AUTH_WITH_CLIENT');



// export const authWithCaptcha = () => ({ type: AUTH_WITH_CAPTCHA.pending });
// export const authWithCaptchaSuccess = () => ({ type: AUTH_WITH_CAPTCHA.success });
// export const authWithCaptchaFail = (payload) => ({ type: AUTH_WITH_CAPTCHA.fail, payload });

export const authWithRegistration = (payload) => ({ type: AUTH_WITH_REGISTRATION.pending, payload });
export const authWithRegistrationSuccess = (payload) => ({ type: AUTH_WITH_REGISTRATION.success, payload });
export const authWithRegistrationFail = (payload) => ({ type: AUTH_WITH_REGISTRATION.fail, payload });

export const authWithClient = (payload) => ({ type: AUTH_WITH_CLIENT.pending, payload });
export const authWithClientSuccess = (payload) => ({ type: AUTH_WITH_CLIENT.success, payload });
export const authWithClientFail = (payload) => ({ type: AUTH_WITH_CLIENT.fail, payload });

export const initialState = {
  error: null,
  registrationNumber: '',
  encryptedClientId: '',
  loadingCaptcha: false,
  loadingRegistration: false,
  loadingClient: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case AUTH_WITH_CAPTCHA.pending:
      return Object.assign({}, state, { error: null, loadingCaptcha: true });
    case AUTH_WITH_REGISTRATION.pending:
      return Object.assign({}, state, { error: null, loadingRegistration: true });
    case AUTH_WITH_CLIENT.pending:
      return Object.assign({}, state, { error: null, loadingClient: true });

    case AUTH_WITH_CAPTCHA.success:
      return Object.assign({}, state, { error: null, loadingCaptcha: false });
    case AUTH_WITH_REGISTRATION.success:
      return Object.assign({}, state, action.payload, { error: null, loadingRegistration: false });
    case AUTH_WITH_CLIENT.success:
      return Object.assign({}, state, action.payload, { error: null, loadingClient: false });

    case AUTH_WITH_CAPTCHA.fail:
      return Object.assign({}, state, { error: action.payload, loadingCaptcha: false });
    case AUTH_WITH_REGISTRATION.fail:
      return Object.assign({}, state, { error: action.payload, loadingRegistration: false });
    case AUTH_WITH_CLIENT.fail:
      return Object.assign({}, state, { error: action.payload, loadingClient: false });

    default:
      return state;
  }
};