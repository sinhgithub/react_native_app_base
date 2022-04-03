import { sendMessageFailure, sendMessageSuccess } from 'src/redux/actions/chat';
import { call, put } from 'redux-saga/effects';
import { apiSendMessage } from 'services/api/chat';

export function* sendMessageSaga(obj) {
  const { params = {}, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiSendMessage, params, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(sendMessageSuccess(data));
      success?.();
    } else {
      yield put(sendMessageFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(sendMessageFailure(error));
    failure?.();
  }
}
