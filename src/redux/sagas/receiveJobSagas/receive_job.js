import { receiveJobFailure, receiveJobSuccess } from 'src/redux/actions/receive_job';
import { call, put } from 'redux-saga/effects';
import { apiReceiveJob } from 'services/api/receiveJob';

export function* receiveJobSaga(obj) {
  const { jobId } = obj.payload;
  try {
    const res = yield call(apiReceiveJob, jobId);
    console.log('======> response receive job ========>', res);
    if (res.status === 200) {
      yield put(receiveJobSuccess(res.data));
    } else {
      yield put(receiveJobFailure(res));
    }
  } catch (error) {
    yield put(receiveJobFailure(error));
  }
}
