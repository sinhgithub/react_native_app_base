import { getListAllJobFailure, getListAllJobSuccess } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListAllJob, apiListAllJobByKey } from 'services/api/listJobApi';
import { filterJobByList } from 'actions/filter';
import { store } from 'store/index';

export function* getListAllJobSaga(obj) {
  if (store.getState().listJob.listAllJobFiltered?.length > 0) {
    console.log(
      store.getState().listJob.listAllJobFiltered?.length,
      'store.getState().listJob.listAllJobFiltered?.length'
    );
    yield put(filterJobByList('reset'));
  }
  try {
    let res;
    if (!obj?.payload) {
      res = yield call(apiListAllJob);
    } else {
      res = yield call(apiListAllJobByKey, obj?.payload);
    }
    console.log('======> list all job ========>', res);
    if (res.status === 200) {
      yield put(getListAllJobSuccess(res.data));
    } else {
      yield put(getListAllJobFailure(res));
    }
  } catch (error) {
    yield put(getListAllJobFailure(error));
  }
}
