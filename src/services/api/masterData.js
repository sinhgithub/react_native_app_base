import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const listProvince = (callback = () => {}) => {
  const url = `${END_POINT}api/master/provinces`;
  return utils.get(url, {}, {}, callback);
};
