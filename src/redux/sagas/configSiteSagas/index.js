import { CONFIG_SITE } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getConfigSiteSaga } from './getConfigSiteSaga';

export default function* configSiteSagas() {
  yield takeLatest(CONFIG_SITE.GET_CONFIG_SITE.HANDLER, getConfigSiteSaga);
}
