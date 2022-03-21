import { saveJobFailure, saveJobSuccess } from 'src/redux/actions/saveJob';
import { call, put } from 'redux-saga/effects';
import { apiSaveJob } from 'services/api/saveJob';

export function* saveJobSaga(obj) {
  const { jobId, callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiSaveJob, jobId, handleErr);
    if (res.status === 200) {
      yield put(saveJobSuccess(res.data));
      return callback?.();
    } else {
      yield put(saveJobFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(saveJobFailure(error));
    failure?.();
  }
}
