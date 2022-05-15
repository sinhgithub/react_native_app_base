import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const listProvince = (callback = () => {}) => {
  const url = `${END_POINT}api/master/provinces`;
  return utils.get(url, {}, {}, callback);
};

export const listDistrict = (provinceId, callback = () => {}) => {
  const url = `${END_POINT}api/master/districts?provinceId=${provinceId}`;
  return utils.get(url, {}, {}, callback);
};

export const listTeamSize = (callback = () => {}) => {
  const url = `${END_POINT}api/master/team-size`;
  return utils.get(url, {}, {}, callback);
};

export const listBusinessCategory = (params = {}, callback = () => {}) => {
  const url = `${END_POINT}api/master/business-category`;
  return utils.get(url, params, {}, callback);
};

export const listDemandSize = (callback = () => {}) => {
  const url = `${END_POINT}api/master/demand-size`;
  return utils.get(url, {}, {}, callback);
};
