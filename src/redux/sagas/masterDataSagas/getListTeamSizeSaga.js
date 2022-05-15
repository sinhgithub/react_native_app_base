import { getListTeamSizeFailure, getListTeamSizeSuccess } from 'src/redux/actions/master_data';
import { call, put } from 'redux-saga/effects';
import { listTeamSize as apiListTeamSize } from 'services/api/masterData';

export function* getListTeamSizeSaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiListTeamSize, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getListTeamSizeSuccess(data));
      success?.();
    } else {
      yield put(getListTeamSizeFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getListTeamSizeFailure(error));
    failure?.();
  }
}
