import { MASTER_DATA } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListProvinceSaga } from './getListProvinceSaga';
import { getListBusinessCategoriesSaga } from './getBusinessCategoriesSaga';
import { getListDemandSizeSaga } from './getDemandSizeSaga';
import { getListDistrictSaga } from './getListDistrictSaga';
import { getListTeamSizeSaga } from './getListTeamSizeSaga';

export default function* masterDataSagas() {
  yield takeLatest(MASTER_DATA.LIST_PROVINCE.HANDLER, getListProvinceSaga);
  yield takeLatest(MASTER_DATA.LIST_TEAM_SIZE.HANDLER, getListTeamSizeSaga);
  yield takeLatest(MASTER_DATA.LIST_BUSINESS_CATEGORY.HANDLER, getListBusinessCategoriesSaga);
  yield takeLatest(MASTER_DATA.LIST_DEMAND_SIZE.HANDLER, getListDemandSizeSaga);
  yield takeLatest(MASTER_DATA.GET_LIST_DISTRICT.HANDLER, getListDistrictSaga);
}
