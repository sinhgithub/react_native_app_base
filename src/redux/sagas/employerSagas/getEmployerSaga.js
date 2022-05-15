import { getEmployerFailure, getEmployerSuccess } from 'src/redux/actions/employer';
import { call, put } from 'redux-saga/effects';
import { apiGetEmployers } from 'services/api/employer';

export function* getEmployerSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetEmployers, params, handleErr);
    if (res.status === 200) {
      const data = res.data;
      yield put(getEmployerSuccess(data));
      success?.(data);
    } else {
      yield put(getEmployerFailure(res));
      failure?.(res);
    }
  } catch (error) {
    yield put(getEmployerFailure(error));
    failure?.(error);
  }
}
