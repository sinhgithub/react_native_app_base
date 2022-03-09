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
  SET_ANIMATED_BOTTOM_MODAL: asyncTypes('SETTINGS/CHANGE_LANGUAGE')
};

export const SETTINGS = {
  CHANGE_LANGUAGE: asyncTypes('SETTINGS/CHANGE_LANGUAGE')
};

export const AUTH = {
  LOGIN: asyncTypes('AUTH/LOGIN')
};

export const GET_LIST_JOB = {
  HOME_PAGE: asyncTypes('GET_LIST_JOB/HOME_PAGE')
};

export const RECEIVE_JOB = {
  RECEIVE_JOB: asyncTypes('RECEIVE_JOB')
};
