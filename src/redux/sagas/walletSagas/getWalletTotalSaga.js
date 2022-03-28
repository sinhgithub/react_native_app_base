import { getWalletTotalFailure, getWalletTotalSuccess } from 'src/redux/actions/wallet';
import { call, put } from 'redux-saga/effects';
import { apiWalletTotal } from 'services/api/wallet';

export function* getWalletTotalSaga(obj) {
  const { callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiWalletTotal, handleErr);
    if (res.status === 200) {
      yield put(getWalletTotalSuccess(res.data));
      return callback?.();
    } else {
      yield put(getWalletTotalFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getWalletTotalFailure(error));
    failure?.();
  }
}
