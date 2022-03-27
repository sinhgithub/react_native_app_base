import { getWalletFailure, getWalletSuccess } from 'src/redux/actions/wallet';
import { call, put } from 'redux-saga/effects';
import { apiWallet } from 'services/api/wallet';

export function* getWalletSaga(obj) {
  const { callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiWallet, handleErr);
    if (res.status === 200) {
      yield put(getWalletSuccess(res.data));
      return callback?.();
    } else {
      yield put(getWalletFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getWalletFailure(error));
    failure?.();
  }
}
