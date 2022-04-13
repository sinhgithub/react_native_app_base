import { getDetailNotifyFailure, getDetailNotifySuccess } from 'src/redux/actions/notification';
import { call, put } from 'redux-saga/effects';
import { apiGetNotifiDetail } from 'services/api/notification';

export function* getDetailNotifySaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetNotifiDetail, params, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getDetailNotifySuccess(data));
      success?.();
    } else {
      yield put(getDetailNotifyFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getDetailNotifyFailure(error));
    failure?.();
  }
}
