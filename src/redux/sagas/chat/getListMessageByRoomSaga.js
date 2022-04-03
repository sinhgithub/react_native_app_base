import {
  getListMessageByRoomHandleSuccess,
  getListMessageByRoomFailure
} from 'src/redux/actions/chat';
import { call, put } from 'redux-saga/effects';
import { apiGetMessagesByRoom } from 'services/api/chat';

export function* getListMessageByRoomSaga(obj) {
  const { params = {}, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(
      apiGetMessagesByRoom,
      { roomId: params?.roomId, page: params?.page, size: params?.size },
      handleErr
    );
    if (res.status === 200) {
      const data = { ...res.data };
      const messages = {};
      data.data.forEach(item => {
        messages[item.id] = item;
      });
      yield put(getListMessageByRoomHandleSuccess({ messages, messagesMeta: data.metadata }));
      success?.();
    } else {
      yield put(getListMessageByRoomFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListMessageByRoomFailure(error));
    failure?.();
  }
}
