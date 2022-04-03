import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiLogin = (params, callback = () => {}) => {
  const url = `${END_POINT}api/auth/login`;
  return utils.post(url, params, {}, callback);
};

export const apiRegisterAccountMember = (params = {}, callback) => {
  const url = `${END_POINT}api/auth/register`;
  return utils.post(url, params, {}, callback);
};
