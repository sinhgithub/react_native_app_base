import { CHAT } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListChatSaga } from './getListChatSaga';
import { getListMessageByRoomSaga } from './getListMessageByRoomSaga';
import { sendMessageSaga } from './sendMessageSaga';

export default function* getListChatSagas() {
  yield takeLatest(CHAT.GET_LIST_CHAT.HANDLER, getListChatSaga);
  yield takeLatest(CHAT.GET_LIST_MESSAGE_BY_ROOM.HANDLER, getListMessageByRoomSaga);
  yield takeLatest(CHAT.SEND_MESSAGE.HANDLER, sendMessageSaga);
}
