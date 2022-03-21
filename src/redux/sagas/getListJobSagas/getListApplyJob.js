import { getListApplyJobFailure, getListApplyJobSuccess } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListApplyJob } from 'services/api/listJobApi';

export function* getListApplyJobSaga(obj) {
  const { key, page, size, isLoadMore } = obj.payload;
  try {
    const res = yield call(apiListApplyJob, { key, page, size });
    console.log(res, 'ressssssssß');
    if (res.status === 200) {
      const data = { ...res.data, isLoadMore };
      yield put(getListApplyJobSuccess(data));
    } else {
      yield put(getListApplyJobFailure(res));
    }
  } catch (error) {
    yield put(getListApplyJobFailure(error));
  }
}
