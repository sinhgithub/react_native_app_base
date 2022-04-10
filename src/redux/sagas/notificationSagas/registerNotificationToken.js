import {
  registerNotificationTokenFailure,
  registerNotificationTokenSuccess
} from 'src/redux/actions/notification';
import { call, put } from 'redux-saga/effects';
import { apiRegisterDeviceNotiToken } from 'services/api/notification';

export function* registerNotificationToken(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiRegisterDeviceNotiToken, params, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(registerNotificationTokenSuccess(data));
      success?.();
    } else {
      yield put(registerNotificationTokenFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(registerNotificationTokenFailure(error));
    failure?.();
  }
}
