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
// ========================================

export const updateUserHandle = payload => ({
  type: USER.UPDATE_USER.HANDLER,
  payload
});

export const updateUserSuccess = payload => ({
  type: USER.UPDATE_USER.SUCCESS,
  payload
});

export const updateUserFailure = payload => ({
  type: USER.UPDATE_USER.FAILURE,
  payload
});
// ========================================
