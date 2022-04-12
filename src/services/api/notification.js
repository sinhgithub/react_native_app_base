import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiGetNotiList = (callback = () => {}) => {
  const url = `${END_POINT}api/notification`;
  return utils.get(url, {}, {}, callback);
};

export const apiGetNotifiDetail = (id, callback = () => {}) => {
  const url = `${END_POINT}api/notification/${id}`;
  return utils.get(url, {}, {}, callback);
};

export const apiReadAllNoti = (params = {}, callback) => {
  const url = `${END_POINT}api/notification/read-all`;
  return utils.put(url, params, callback);
};

export const apiRegisterDeviceNotiToken = (params = {}, callback) => {
  const url = `${END_POINT}api/notification/register_token`;
  return utils.post(url, params, {}, callback);
};
