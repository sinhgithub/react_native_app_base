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
  SET_ANIMATED_BOTTOM_MODAL: asyncTypes('SYSTEM/CHANGE_LANGUAGE'),
  SHOW_COMPLETE_MODAL: asyncTypes('SYSTEM/SHOW_COMPLETE_MODAL'),
  CLEAR_COMPLETE_MODAL: asyncTypes('SYSTEM/CLEAR_COMPLETE_MODAL'),
  SHOW_CONFIRM_MODAL: asyncTypes('SYSTEM/SHOW_CONFIRM_MODAL'),
  CLEAR_CONFIRM_MODAL: asyncTypes('SYSTEM/CLEAR_CONFIRM_MODAL'),
  SET_MESSAGE_BOX_TAB_INDEX: 'SYSTEM/SET_MESSAGE_BOX_TAB_INDEX',
  SET_FILTER_JOB_BY_PROVINCE: 'SYSTEM/SET_FILTER_JOB_BY_PROVINCE',
  CLEAN_FILTER_JOB_BY_PROVINCE: 'SYSTEM/CLEAN_FILTER_JOB_BY_PROVINCE',
  FILTER_JOB: asyncTypes('SYSTEM/FILTER_JOB'),
  SET_FOCUS_INPUT: 'SYSTEM/SET_FOCUS_INPUT',
  SET_FILTER_JOB_BY_CATEGORY: 'SYSTEM/SET_FILTER_JOB_BY_CATEGORY',
  CLEAN_FILTER_JOB_BY_CATEGORY: 'SYSTEM/CLEAN_FILTER_JOB_BY_CATEGORY',
  BACK_TO_WORK_SCREEN: 'SYSTEM/BACK_TO_WORK_SCREEN'
};

export const SETTINGS = {
  CHANGE_LANGUAGE: asyncTypes('SETTINGS/CHANGE_LANGUAGE')
};

export const AUTH = {
  LOGIN: asyncTypes('AUTH/LOGIN'),
  REGISTER: asyncTypes('AUTH/REGISTER'),
  LOGOUT: 'LOGOUT'
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
  GET_USER: asyncTypes('USER/GET_USER'),
  UPDATE_USER: asyncTypes('USER/UPDATE_USER'),
  GET_SKILL_CRITERIA: asyncTypes('USER/GET_SKILL_CRITERIA')
};

export const WALLET = {
  GET_WALLET: asyncTypes('WALLET/GET_WALLET'),
  GET_WALLET_WITH_DRAW: asyncTypes('WALLET/GET_WALLET_WITH_DRAW'),
  GET_WALLET_HISTORY: asyncTypes('WALLET/GET_WALLET_HISTORY'),
  GET_WALLET_TOTAL: asyncTypes('WALLET/GET_WALLET_TOTAL'),
  WITHDRAW: asyncTypes('WALLET/WITHDRAW')
};

export const MASTER_DATA = {
  LIST_PROVINCE: asyncTypes('MASTER_DATA/LIST_PROVINCE'),
  LIST_TEAM_SIZE: asyncTypes('MASTER_DATA/LIST_TEAM_SIZE'),
  LIST_BUSINESS_CATEGORY: asyncTypes('MASTER_DATA/LIST_BUSINESS_CATEGORY'),
  LIST_DEMAND_SIZE: asyncTypes('MASTER_DATA/LIST_DEMAND_SIZE'),
  GET_LIST_DISTRICT: asyncTypes('MASTER_DATA/GET_LIST_DISTRICT')
};

export const CHAT = {
  GET_LIST_CHAT: asyncTypes('CHAT/GET_LIST_CHAT'),
  GET_LIST_MESSAGE_BY_ROOM: asyncTypes('CHAT/GET_LIST_MESSAGE_BY_ROOM'),
  SEND_MESSAGE: asyncTypes('CHAT/SEND_MESSAGE')
};

export const NOTIFICATION = {
  GET_LIST_NOTIFY: asyncTypes('NOTIFICATION/GET_LIST_NOTIFY'),
  GET_DETAIL_NOTIFY: asyncTypes('NOTIFICATION/GET_DETAIL_NOTIFY'),
  READ_ALL_NOTIFY: asyncTypes('NOTIFICATION/READ_ALL_NOTIFY'),
  REGISTER_NOTIFICATION_TOKEN: asyncTypes('NOTIFICATION/REGISTER_NOTIFICATION_TOKEN')
};

export const CONFIG_SITE = {
  GET_CONFIG_SITE: asyncTypes('NOTIFICATION/GET_CONFIG_SITE')
};

export const EMPLOYER = {
  GET_EMPLOYER: asyncTypes('EMPLOYER/GET_EMPLOYER'),
  GET_EMPLOYER_RECRUITMENT: asyncTypes('EMPLOYER/GET_EMPLOYER_RECRUITMENT'),
  GET_EMPLOYER_INFO: asyncTypes('EMPLOYER/GET_EMPLOYER_INFO')
};
