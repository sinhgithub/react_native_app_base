import { getDemandSizeFailure, getDemandSizeSuccess } from 'src/redux/actions/master_data';
import { call, put } from 'redux-saga/effects';
import { listDemandSize as apiListDemandSize } from 'services/api/masterData';

export function* getListDemandSizeSaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiListDemandSize, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getDemandSizeSuccess(data));
      success?.();
    } else {
      yield put(getDemandSizeFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getDemandSizeFailure(error));
    failure?.();
  }
}
