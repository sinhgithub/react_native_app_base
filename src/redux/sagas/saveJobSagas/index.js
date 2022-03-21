import { SAVE_JOB } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { saveJobSaga } from './saveJobSaga';

export default function* saveJobSagas() {
  yield takeLatest(SAVE_JOB.SAVE_JOB.HANDLER, saveJobSaga);
}
