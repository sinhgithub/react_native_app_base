import { SYSTEM } from 'actionsType';

export const setAnimatedBottomModalSuccess = payload => ({
  type: SYSTEM.SET_ANIMATED_BOTTOM_MODAL.SUCCESS,
  payload
});

export const setAnimatedBottomModalFailure = payload => ({
  type: SYSTEM.SET_ANIMATED_BOTTOM_MODAL.FAILURE,
  payload
});

// control complete modal
export const showCompleteModal = payload => ({
  type: SYSTEM.SHOW_COMPLETE_MODAL.SUCCESS,
  payload
});

export const hideCompleteModal = payload => ({
  type: SYSTEM.CLEAR_COMPLETE_MODAL.SUCCESS,
  payload
});

// control confirm modal
export const showConfirmModal = payload => ({
  type: SYSTEM.SHOW_CONFIRM_MODAL.SUCCESS,
  payload
});

export const hideConfirmModal = payload => ({
  type: SYSTEM.CLEAR_CONFIRM_MODAL.SUCCESS,
  payload
});
