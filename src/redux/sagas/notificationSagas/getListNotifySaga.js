import { getListNotifyFailure, getListNotifySuccess } from 'src/redux/actions/notification';
import { call, put } from 'redux-saga/effects';
import { apiGetNotiList } from 'services/api/notification';

export function* getListNotifySaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetNotiList, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListNotifySuccess(data));
      success?.();
    } else {
      yield put(getListNotifyFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListNotifyFailure(error));
    failure?.();
  }
}
