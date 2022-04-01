import { USER } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getUserSaga } from './getUserSaga';
import { updateUserSaga } from './updateUserSaga';
import { getSkillCriteriaSaga } from './getSkillCriteriaSaga';
export default function* userSagas() {
  yield takeLatest(USER.GET_USER.HANDLER, getUserSaga);
  yield takeLatest(USER.UPDATE_USER.HANDLER, updateUserSaga);
  yield takeLatest(USER.GET_SKILL_CRITERIA.HANDLER, getSkillCriteriaSaga);
}
