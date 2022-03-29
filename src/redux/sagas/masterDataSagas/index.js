import { MASTER_DATA } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListProvinceSaga } from './getListProvinceSaga';

export default function* masterDataSagas() {
  yield takeLatest(MASTER_DATA.LIST_PROVINCE.HANDLER, getListProvinceSaga);
}
