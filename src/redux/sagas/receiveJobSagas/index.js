import { RECEIVE_JOB } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { receiveJobSaga } from './receive_job';

export default function* receiveJobSagas() {
  yield takeLatest(RECEIVE_JOB.RECEIVE_JOB.HANDLER, receiveJobSaga);
}
