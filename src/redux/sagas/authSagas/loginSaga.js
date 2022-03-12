import { loginFailure, loginSuccess } from 'actions/auth';
import { call, put } from 'redux-saga/effects';
import { apiLogin } from 'services/api/authApi';

export function* loginSaga(obj) {
  const { email, password } = obj.payload;
  try {
    const res = yield call(apiLogin, {
      email: email,
      password: password
    });
    if (res.status === 200) {
      yield put(loginSuccess(res.data));
    } else {
      yield put(loginFailure(res));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}
