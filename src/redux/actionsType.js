export const asyncTypes = action => ({
  ORIGIN: action,
  HANDLER: `${action}_HANDLER`,
  PENDING: `${action}_PENDING`,
  START: `${action}_START`,
  MORE: `${action}_MORE`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  ERROR: `${action}_ERROR`,
  CLEAR: `${action}_CLEAR`,
  STORE: `${action}_STORE`,
  END: `${action}_END`
});

export const SYSTEM = {
  SET_ANIMATED_BOTTOM_MODAL: asyncTypes('SETTINGS/CHANGE_LANGUAGE'),
  SHOW_COMPLETE_MODAL: asyncTypes('SETTINGS/SHOW_COMPLETE_MODAL'),
  CLEAR_COMPLETE_MODAL: asyncTypes('SETTINGS/CLEAR_COMPLETE_MODAL'),
  SHOW_CONFIRM_MODAL: asyncTypes('SETTINGS/SHOW_CONFIRM_MODAL'),
  CLEAR_CONFIRM_MODAL: asyncTypes('SETTINGS/CLEAR_CONFIRM_MODAL')
};

export const SETTINGS = {
  CHANGE_LANGUAGE: asyncTypes('SETTINGS/CHANGE_LANGUAGE')
};

export const AUTH = {
  LOGIN: asyncTypes('AUTH/LOGIN')
};

export const GET_LIST_JOB = {
  HOME_PAGE: asyncTypes('GET_LIST_JOB/HOME_PAGE'),
  ALL_JOB: asyncTypes('GET_LIST_JOB/ALL_JOB'),
  FOLLOW_JOB: asyncTypes('GET_LIST_JOB/FOLLOW_JOB'),
  APPLY_JOB: asyncTypes('GET_LIST_JOB/APPLY_JOB'),
  APPLIED_JOB: asyncTypes('GET_LIST_JOB/APPLIED_JOB')
};

export const RECEIVE_JOB = {
  RECEIVE_JOB: asyncTypes('RECEIVE_JOB')
};

export const SAVE_JOB = {
  SAVE_JOB: asyncTypes('SAVE_JOB')
};

export const FILTER = {
  FILTER_JOB_BY_LIST: asyncTypes('FILTER/FILTER_JOB_BY_LIST')
};

export const CALENDAR_WORK = {
  CALENDAR_WORK: asyncTypes('CALENDAR_WORK/CALENDAR_WORK'),
  UPDATE: asyncTypes('CALENDAR_WORK/UPDATE')
};

export const USER = {
  CHECK_IN: asyncTypes('USER/CHECK_IN'),
  CHECK_OUT: asyncTypes('USER/CHECK_OUT'),
  ABSENCE: asyncTypes('USER/ABSENCE'),
  GET_USER: asyncTypes('USER/GET_USER')
};

export const WALLET = {
  GET_WALLET: asyncTypes('WALLET/GET_WALLET'),
  GET_WALLET_WITH_DRAW: asyncTypes('WALLET/GET_WALLET_WITH_DRAW'),
  GET_WALLET_HISTORY: asyncTypes('WALLET/GET_WALLET_HISTORY'),
  GET_WALLET_TOTAL: asyncTypes('WALLET/GET_WALLET_TOTAL')
};
