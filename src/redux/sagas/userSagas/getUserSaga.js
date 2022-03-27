import { getUserFailure, getUserSuccess } from 'src/redux/actions/user';
import { call, put } from 'redux-saga/effects';
import { apiGetUser } from 'services/api/user';

export function* getUserSaga(obj) {
  const { callback, handleErr, failure } = obj.payload;
  try {
    const res = yield call(apiGetUser, handleErr);
    if (res.status === 200) {
      yield put(getUserSuccess(res.data));
      return callback?.();
    } else {
      yield put(getUserFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getUserFailure(error));
    failure?.();
  }
}
