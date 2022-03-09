import { AUTH } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';

export default function* authSaga() {
  yield takeLatest(AUTH.LOGIN.HANDLER, loginSaga);
}
