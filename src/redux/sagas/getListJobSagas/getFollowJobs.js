import { getListFollowJobSuccess, getListFollowJobFailure } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListFollowJob } from 'services/api/listJobApi';

export function* getListFollowJobSaga(obj) {
  const { key, page, size, success } = obj.payload;
  try {
    const res = yield call(apiListFollowJob, { page, size, key });
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListFollowJobSuccess(data));
      success?.();
    } else {
      yield put(getListFollowJobFailure(res));
    }
  } catch (error) {
    yield put(getListFollowJobFailure(error));
  }
}
