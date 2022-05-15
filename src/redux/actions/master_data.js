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

// =============================================================

export const getBusinessCategoryHandle = payload => ({
  type: MASTER_DATA.LIST_BUSINESS_CATEGORY.HANDLER,
  payload
});

export const getBusinessCategorySuccess = payload => ({
  type: MASTER_DATA.LIST_BUSINESS_CATEGORY.SUCCESS,
  payload
});

export const getBusinessCategoryFailure = payload => ({
  type: MASTER_DATA.LIST_BUSINESS_CATEGORY.FAILURE,
  payload
});
// =============================================================

export const getDemandSizeHandle = payload => ({
  type: MASTER_DATA.LIST_DEMAND_SIZE.HANDLER,
  payload
});

export const getDemandSizeSuccess = payload => ({
  type: MASTER_DATA.LIST_DEMAND_SIZE.SUCCESS,
  payload
});

export const getDemandSizeFailure = payload => ({
  type: MASTER_DATA.LIST_DEMAND_SIZE.FAILURE,
  payload
});
// =============================================================

export const getListDistrictHandle = payload => ({
  type: MASTER_DATA.GET_LIST_DISTRICT.HANDLER,
  payload
});

export const getListDistrictSuccess = payload => ({
  type: MASTER_DATA.GET_LIST_DISTRICT.SUCCESS,
  payload
});

export const getListDistrictFailure = payload => ({
  type: MASTER_DATA.GET_LIST_DISTRICT.FAILURE,
  payload
});
