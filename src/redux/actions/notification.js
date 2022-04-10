import { NOTIFICATION } from 'actionsType';

export const getListNotifyHandle = payload => ({
  type: NOTIFICATION.GET_LIST_NOTIFY.HANDLER,
  payload
});
export const getListNotifySuccess = payload => ({
  type: NOTIFICATION.GET_LIST_NOTIFY.SUCCESS,
  payload
});
export const getListNotifyFailure = payload => ({
  type: NOTIFICATION.GET_LIST_NOTIFY.FAILURE,
  payload
});
// ======================================

export const getDetailNotifyHandle = payload => ({
  type: NOTIFICATION.GET_DETAIL_NOTIFY.HANDLER,
  payload
});
export const getDetailNotifySuccess = payload => ({
  type: NOTIFICATION.GET_DETAIL_NOTIFY.SUCCESS,
  payload
});
export const getDetailNotifyFailure = payload => ({
  type: NOTIFICATION.GET_DETAIL_NOTIFY.FAILURE,
  payload
});
// ======================================

export const registerNotificationTokenHandle = payload => ({
  type: NOTIFICATION.REGISTER_NOTIFICATION_TOKEN.HANDLER,
  payload
});
export const registerNotificationTokenSuccess = payload => ({
  type: NOTIFICATION.REGISTER_NOTIFICATION_TOKEN.SUCCESS,
  payload
});
export const registerNotificationTokenFailure = payload => ({
  type: NOTIFICATION.REGISTER_NOTIFICATION_TOKEN.FAILURE,
  payload
});
// ======================================
