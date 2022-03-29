import { getListProvinceSuccess, getListProvinceFailure } from 'src/redux/actions/master_data';
import { call, put } from 'redux-saga/effects';
import { listProvince as apiListProvince } from 'services/api/masterData';

export function* getListProvinceSaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiListProvince, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListProvinceSuccess(data));
      success?.();
    } else {
      yield put(getListProvinceFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListProvinceFailure(error));
    failure?.();
  }
}
