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
// set tabindex message box
export const setTabIndexMessageBox = payload => ({
  type: SYSTEM.SET_MESSAGE_BOX_TAB_INDEX,
  payload
});
// set filterJobByProvince
export const setFilterJobByProvince = payload => ({
  type: SYSTEM.SET_FILTER_JOB_BY_PROVINCE,
  payload
});

// clean filter by province
export const cleanFilterJobByProvince = payload => ({
  type: SYSTEM.CLEAN_FILTER_JOB_BY_PROVINCE,
  payload
});

// filter job
export const filterJobHandle = payload => ({
  type: SYSTEM.FILTER_JOB.HANDLER,
  payload
});
export const filterJobSuccess = payload => ({
  type: SYSTEM.FILTER_JOB.SUCCESS,
  payload
});
export const filterJobFailure = payload => ({
  type: SYSTEM.FILTER_JOB.FAILURE,
  payload
});
