import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiConfigSite = (params = {}, callback = () => {}) => {
  const url = `${END_POINT}api/config-site`;
  return utils.get(url, params, {}, callback);
};
