import { getListAllJobFailure, getListAllJobSuccess } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListAllJob } from 'services/api/listJobApi';

export function* getListAllJobSaga(obj) {
  const { page, size, province_id, success } = obj.payload;
  try {
    const res = yield call(apiListAllJob, { page, size, province_id });
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListAllJobSuccess(data));
      success?.();
    } else {
      yield put(getListAllJobFailure(res));
    }
  } catch (error) {
    yield put(getListAllJobFailure(error));
  }
}
