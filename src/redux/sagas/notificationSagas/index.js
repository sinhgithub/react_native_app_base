import { NOTIFICATION } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListNotifySaga } from './getListNotifySaga';
import { getDetailNotifySaga } from './getDetailNotifySaga';
import { registerNotificationToken } from './registerNotificationToken';

export default function* notificationSagas() {
  yield takeLatest(NOTIFICATION.GET_LIST_NOTIFY.HANDLER, getListNotifySaga);
  yield takeLatest(NOTIFICATION.GET_DETAIL_NOTIFY.HANDLER, getDetailNotifySaga);
  yield takeLatest(NOTIFICATION.REGISTER_NOTIFICATION_TOKEN.HANDLER, registerNotificationToken);
}
