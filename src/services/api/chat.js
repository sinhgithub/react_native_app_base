import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiGetListChat = (params = {}, callback = () => {}) => {
  const url = `${END_POINT}api/chat`;
  return utils.get(url, params, {}, callback);
};

export const apiGetMessagesByRoom = (params, callback = () => {}) => {
  const { roomId, page, size } = params;
  const url = `${END_POINT}api/chat/${roomId}/message?page=${page}&size=${size}`;
  return utils.get(url, params, {}, callback);
};
// {toUser: 38, message: "asasasas"}
export const apiSendMessage = (params, callback) => {
  const url = `${END_POINT}api/chat/send`;
  return utils.post(url, params, {}, callback);
};
