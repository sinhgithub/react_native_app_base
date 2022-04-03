import { registerFailure, registerSuccess } from 'actions/auth';
import { call, put } from 'redux-saga/effects';
import { apiRegisterAccountMember } from 'services/api/authApi';

export function* registerSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiRegisterAccountMember, params, handleErr);
    if (res?.status === 200) {
      yield put(registerSuccess(res?.data));
      success?.();
    } else {
      yield put(registerFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(registerFailure(error));
  }
}
