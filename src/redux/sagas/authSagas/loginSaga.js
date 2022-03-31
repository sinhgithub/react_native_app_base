import { loginFailure, loginSuccess } from 'actions/auth';
import { call, put } from 'redux-saga/effects';
import { apiLogin } from 'services/api/authApi';

export function* loginSaga(obj) {
  const { params, onRegisterSuccess, onRegisterFail, handleErr } = obj.payload;
  const { email, password } = params;
  try {
    const res = yield call(
      apiLogin,
      {
        email,
        password
      },
      handleErr
    );
    if (res?.status === 200) {
      yield put(loginSuccess(res?.data));
      onRegisterSuccess?.();
    } else {
      yield put(loginFailure(res?.response));
      onRegisterFail?.();
    }
  } catch (error) {
    yield put(loginFailure(error));
    onRegisterFail?.();
  }
}
