import { getListAppliedJobSuccess, getListAppliedJobFailure } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListAppliedJob } from 'services/api/listJobApi';

export function* getListAppliedJobSaga(obj) {
  const { isLoadMore, handleErr } = obj.payload;
  try {
    const res = yield call(apiListAppliedJob, {}, handleErr);
    if (res.status === 200) {
      const data = { ...res.data, isLoadMore };
      yield put(getListAppliedJobSuccess(data));
    } else {
      yield put(getListAppliedJobFailure(res));
    }
  } catch (error) {
    yield put(getListAppliedJobFailure(error));
  }
}
