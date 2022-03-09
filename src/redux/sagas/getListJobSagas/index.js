import {GET_LIST_JOB} from 'actionsType';
import {takeLatest} from 'redux-saga/effects';
import {getListJobHomePageSaga} from './getListJobHomePageSaga';

export default function* getListJobSaga() {
  yield takeLatest(GET_LIST_JOB.HOME_PAGE.HANDLER, getListJobHomePageSaga);
}
