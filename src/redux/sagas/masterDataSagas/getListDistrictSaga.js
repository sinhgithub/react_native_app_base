import { getListDistrictSuccess, getListDistrictFailure } from 'src/redux/actions/master_data';
import { call, put } from 'redux-saga/effects';
import { listDistrict as apiListDistrict } from 'services/api/masterData';

export function* getListDistrictSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiListDistrict, params, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListDistrictSuccess(data));
      success?.(data);
    } else {
      yield put(getListDistrictFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListDistrictFailure(error));
    failure?.();
  }
}
