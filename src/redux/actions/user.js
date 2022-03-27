import { USER } from 'actionsType';

export const getUserHandle = payload => ({
  type: USER.GET_USER.HANDLER,
  payload
});

export const getUserSuccess = payload => ({
  type: USER.GET_USER.SUCCESS,
  payload
});

export const getUserFailure = payload => ({
  type: USER.GET_USER.FAILURE,
  payload
});
