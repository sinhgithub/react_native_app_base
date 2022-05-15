import { EMPLOYER } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getEmployerSaga } from './getEmployerSaga';
import { getEmployerRecruitmentSaga } from './getEmployerRecruitmentSaga';

export default function* employerSagas() {
  yield takeLatest(EMPLOYER.GET_EMPLOYER.HANDLER, getEmployerSaga);
  yield takeLatest(EMPLOYER.GET_EMPLOYER_RECRUITMENT.HANDLER, getEmployerRecruitmentSaga);
}
