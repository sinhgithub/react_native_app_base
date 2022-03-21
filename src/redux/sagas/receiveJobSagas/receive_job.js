import { receiveJobFailure, receiveJobSuccess } from 'src/redux/actions/receive_job';
import { call, put } from 'redux-saga/effects';
import { apiReceiveJob } from 'services/api/receiveJob';

export function* receiveJobSaga(obj) {
  const { jobId, callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiReceiveJob, jobId, handleErr);
    if (res.status === 200) {
      yield put(receiveJobSuccess(res.data));
      return callback?.();
    } else {
      yield put(receiveJobFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(receiveJobFailure(error));
    failure?.();
  }
}
