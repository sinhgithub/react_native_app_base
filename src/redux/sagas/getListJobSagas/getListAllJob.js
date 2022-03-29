import { getListAllJobFailure, getListAllJobSuccess } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListAllJob } from 'services/api/listJobApi';

export function* getListAllJobSaga(obj) {
  const { key, page, size, isLoadMore, search } = obj.payload;
  try {
    const res = yield call(apiListAllJob, { key, page, size });
    if (res.status === 200) {
      const data = { ...res.data, isLoadMore, search };
      yield put(getListAllJobSuccess(data));
    } else {
      yield put(getListAllJobFailure(res));
    }
  } catch (error) {
    yield put(getListAllJobFailure(error));
  }
}
