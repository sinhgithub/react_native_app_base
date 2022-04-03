import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import getListJobSagas from './getListJobSagas';
import receiveJobSagas from './receiveJobSagas';
import saveJobSagas from './saveJobSagas';
import calendarWorkSagas from './calendarWorkSagas';
import walletSagas from './walletSagas';
import userSagas from './userSagas';
import masterDataSagas from './masterDataSagas';
import getListChatSagas from './chat';

export default function* rootSaga() {
  yield all([
    authSagas(),
    getListJobSagas(),
    receiveJobSagas(),
    saveJobSagas(),
    calendarWorkSagas(),
    walletSagas(),
    userSagas(),
    masterDataSagas(),
    getListChatSagas()
  ]);
}
