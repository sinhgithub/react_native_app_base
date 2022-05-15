import { SYSTEM } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { filterJobSaga } from './filterJobSaga';

export default function* filterJobSagas() {
  yield takeLatest(SYSTEM.FILTER_JOB.HANDLER, filterJobSaga);
}
