import { USER } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getUserSaga } from './getUserSaga';
import { updateUserSaga } from './updateUserSaga';
export default function* userSagas() {
  yield takeLatest(USER.GET_USER.HANDLER, getUserSaga);
  yield takeLatest(USER.UPDATE_USER.HANDLER, updateUserSaga);
}
