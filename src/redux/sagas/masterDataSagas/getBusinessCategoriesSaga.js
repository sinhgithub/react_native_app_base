import {
  getBusinessCategoryFailure,
  getBusinessCategorySuccess
} from 'src/redux/actions/master_data';
import { call, put } from 'redux-saga/effects';
import { listBusinessCategory as apiListBusinessCategory } from 'services/api/masterData';

export function* getListBusinessCategoriesSaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiListBusinessCategory, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getBusinessCategorySuccess(data));
      success?.();
    } else {
      yield put(getBusinessCategoryFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getBusinessCategoryFailure(error));
    failure?.();
  }
}
