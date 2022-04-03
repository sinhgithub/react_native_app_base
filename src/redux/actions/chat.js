import { CHAT } from 'actionsType';

export const getListChatHandle = payload => ({
  type: CHAT.GET_LIST_CHAT.HANDLER,
  payload
});

export const getListChatSuccess = payload => ({
  type: CHAT.GET_LIST_CHAT.SUCCESS,
  payload
});

export const getListChatFailure = payload => ({
  type: CHAT.GET_LIST_CHAT.FAILURE,
  payload
});
// ======================================

export const getListMessageByRoomHandle = payload => ({
  type: CHAT.GET_LIST_MESSAGE_BY_ROOM.HANDLER,
  payload
});

export const getListMessageByRoomHandleSuccess = payload => ({
  type: CHAT.GET_LIST_MESSAGE_BY_ROOM.SUCCESS,
  payload
});

export const getListMessageByRoomFailure = payload => ({
  type: CHAT.GET_LIST_MESSAGE_BY_ROOM.FAILURE,
  payload
});
// ======================================
export const sendMessageHandle = payload => ({
  type: CHAT.SEND_MESSAGE.HANDLER,
  payload
});

export const sendMessageSuccess = payload => ({
  type: CHAT.SEND_MESSAGE.SUCCESS,
  payload
});

export const sendMessageFailure = payload => ({
  type: CHAT.SEND_MESSAGE.FAILURE,
  payload
});
// ======================================
