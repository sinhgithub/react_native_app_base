import { AUTH } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { registerSaga } from './registerSaga';

export default function* authSaga() {
  yield takeLatest(AUTH.LOGIN.HANDLER, loginSaga);
  yield takeLatest(AUTH.REGISTER.HANDLER, registerSaga);
}
