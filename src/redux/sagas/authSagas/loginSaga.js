import { loginFailure, loginSuccess } from 'actions/auth';
import { call, put } from 'redux-saga/effects';
import { apiLogin } from 'services/api/authApi';

export function* loginSaga(obj) {
  const { email, password ,callback} = obj.payload;
  try {
    const res = yield call(apiLogin, {
      email: email,
      password: password
    },callback);
    if (res?.status === 200) {
      yield put(loginSuccess(res?.data));
    } else {
      yield put(loginFailure(res?.response));
    }
  } catch (error) {
    yield put(loginFailure(error));
    yield call(callback,`xay ra loi : ${res}`,JSON.stringify(error))
  }
}
