import { AUTH } from 'actionsType';

export const refreshTokenHandle = payload => ({
  type: AUTH.REFRESH_TOKEN.HANDLER,
  payload
});

export const loginHandle = payload => ({
  type: AUTH.LOGIN.HANDLER,
  payload
});

export const loginFailure = payload => ({
  type: AUTH.LOGIN.FAILURE,
  payload
});

export const loginSuccess = payload => ({
  type: AUTH.LOGIN.SUCCESS,
  payload
});
