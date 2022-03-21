import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import getListJobSagas from './getListJobSagas';
import receiveJobSagas from './receiveJobSagas';
import saveJobSagas from './saveJobSagas';
import calendarWorkSagas from './calendarWorkSagas';

export default function* rootSaga() {
  yield all([
    authSagas(),
    getListJobSagas(),
    receiveJobSagas(),
    saveJobSagas(),
    calendarWorkSagas()
  ]);
}
