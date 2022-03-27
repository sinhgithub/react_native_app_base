import { USER } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getUserSaga } from './getUserSaga';
export default function* userSagas() {
  yield takeLatest(USER.GET_USER.HANDLER, getUserSaga);
}
