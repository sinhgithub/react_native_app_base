import { MASTER_DATA } from 'actionsType';

export const getListProvinceHandle = payload => ({
  type: MASTER_DATA.LIST_PROVINCE.HANDLER,
  payload
});

export const getListProvinceSuccess = payload => ({
  type: MASTER_DATA.LIST_PROVINCE.SUCCESS,
  payload
});

export const getListProvinceFailure = payload => ({
  type: MASTER_DATA.LIST_PROVINCE.FAILURE,
  payload
});
