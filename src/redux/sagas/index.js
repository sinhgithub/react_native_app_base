import { all } from 'redux-saga/effects';
import authSagas from './authSagas';
import getListJobSagas from './getListJobSagas';
import receiveJobSagas from './receiveJobSagas';

export default function* rootSaga() {
  yield all([authSagas(), getListJobSagas(), receiveJobSagas()]);
}
