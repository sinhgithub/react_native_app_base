import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;
/**
 *
 * @param {*} params {
 *  email: string,
 *  password: string
 * }
 * @returns
 */
export const apiLogin = params => {
  const url = `${END_POINT}api/auth/login`;
  return utils.post(url, params);
};

export const apiRegisterAccountMember = params => {
  const url = `${END_POINT}api/auth/register`;
  return utils.post(url, params);
};
