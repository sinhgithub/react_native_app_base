import { getEmployerInfoFailure, getEmployerInfoSuccess } from 'src/redux/actions/employer';
import { call, put } from 'redux-saga/effects';
import { apiGetEmployerInfo } from 'services/api/employer';

export function* getEmployerInfoSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetEmployerInfo, params, handleErr);
    if (res.status === 200) {
      const data = res.data;
      yield put(getEmployerInfoSuccess(data));
      success?.(data);
    } else {
      yield put(getEmployerInfoFailure(res));
      failure?.(res);
    }
  } catch (error) {
    yield put(getEmployerInfoFailure(error));
    failure?.(error);
  }
}
