import { getWalletWithDrawSuccess, getWalletWithDrawFailure } from 'src/redux/actions/wallet';
import { call, put } from 'redux-saga/effects';
import { apiWalletWithDraw } from 'services/api/wallet';

export function* getWalletWithDrawSaga(obj) {
  const { callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiWalletWithDraw, handleErr);
    if (res.status === 200) {
      yield put(getWalletWithDrawSuccess(res.data));
      return callback?.();
    } else {
      yield put(getWalletWithDrawFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getWalletWithDrawFailure(error));
    failure?.();
  }
}
