import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiGetEmployers = (params = {}, callback = () => {}) => {
  const url = `${END_POINT}api/employer`;
  return utils.get(url, params, {}, callback);
};

export const apiGetEmployerRecruitment = (employerId, callback = () => {}) => {
  const url = `${END_POINT}api/employer/${employerId}/job`;
  return utils.get(url, {}, {}, callback);
};
