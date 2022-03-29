import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiWallet = (callback = () => {}) => {
  const url = `${END_POINT}api/wallet`;
  return utils.get(url, {}, {}, callback);
};

export const apiWalletWithDraw = (callback = () => {}) => {
  const url = `${END_POINT}api/wallet/withdraw`;
  return utils.get(url, {}, {}, callback);
};

export const apiWalletHistory = (callback = () => {}) => {
  const url = `${END_POINT}api/wallet/logs`;
  return utils.get(url, {}, {}, callback);
};

export const apiWalletTotal = (callback = () => {}) => {
  const url = `${END_POINT}api/wallet/stats`;
  return utils.get(url, {}, {}, callback);
};

export const apiWithDraw = (params, callback = () => {}) => {
  const url = `${END_POINT}api/wallet/withdraw`;
  return utils.post(url, params, {}, callback);
};
