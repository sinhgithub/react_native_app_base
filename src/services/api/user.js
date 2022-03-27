import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiGetUser = (callback = () => {}) => {
  const url = `${END_POINT}api/user`;
  return utils.get(url, {}, {}, callback);
};

export const apiGetSkillCriteria = (callback = () => {}) => {
  const url = `${END_POINT}api/master/skill-criteria`;
  return utils.get(url, {}, {}, callback);
};

export const apiUpdateUser = (params, callback = () => {}) => {
  const url = `${END_POINT}api/user`;
  return utils.put(url, params, callback);
};
