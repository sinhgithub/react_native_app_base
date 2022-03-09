import { SYSTEM } from 'actionsType';

export const setAnimatedBottomModalSuccess = payload => ({
  type: SYSTEM.SET_ANIMATED_BOTTOM_MODAL.SUCCESS,
  payload
});

export const setAnimatedBottomModalFailure = payload => ({
  type: SYSTEM.SET_ANIMATED_BOTTOM_MODAL.FAILURE,
  payload
});
