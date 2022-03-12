import { GET_LIST_JOB } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListJobHomePageSaga } from './getListJobHomePageSaga';
import { getListAllJobSaga } from './getListAllJob';

export default function* getListJobSaga() {
  yield takeLatest(GET_LIST_JOB.HOME_PAGE.HANDLER, getListJobHomePageSaga);
  yield takeLatest(GET_LIST_JOB.ALL_JOB.HANDLER, getListAllJobSaga);
}
