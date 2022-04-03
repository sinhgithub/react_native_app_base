import { updateUserSuccess, updateUserFailure } from 'src/redux/actions/user';
import { call, put } from 'redux-saga/effects';
import { apiUpdateUser } from 'services/api/user';

export function* updateUserSaga(obj) {
  const { params, success, handleErr, failure } = obj.payload;
  try {
    const res = yield call(apiUpdateUser, params, handleErr);
    if (res.status === 200) {
      yield put(updateUserSuccess(res.data));
      return success?.();
    } else {
      yield put(updateUserFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(updateUserFailure(error));
    failure?.();
  }
}
