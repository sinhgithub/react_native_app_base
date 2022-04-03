import { getListChatFailure, getListChatSuccess } from 'src/redux/actions/chat';
import { call, put } from 'redux-saga/effects';
import { apiGetListChat } from 'services/api/chat';

export function* getListChatSaga(obj) {
  const { params = {}, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetListChat, params, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      const conversations = {};
      data.data.forEach(item => {
        conversations[item.id] = item;
      });
      yield put(getListChatSuccess({ conversations, conversationsMeta: data.metadata }));
      success?.();
    } else {
      yield put(getListChatFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListChatFailure(error));
    failure?.();
  }
}
