import { withdrawFailure, withdrawSuccess } from 'src/redux/actions/wallet';
import { call, put } from 'redux-saga/effects';
import { apiWithDraw } from 'services/api/wallet';

export function* withDrawSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiWithDraw, params, handleErr);
    if (res.status === 200) {
      yield put(withdrawSuccess(res.data));
      success?.(res);
    } else {
      yield put(withdrawFailure(res));
      failure?.(res);
    }
  } catch (error) {
    yield put(withdrawFailure(error));
    failure?.(error);
  }
}
