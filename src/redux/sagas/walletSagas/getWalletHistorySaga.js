import { getWalletHistoryFailure, getWalletHistorySuccess } from 'src/redux/actions/wallet';
import { call, put } from 'redux-saga/effects';
import { apiWalletHistory } from 'services/api/wallet';

export function* getWalletHistorySaga(obj) {
  const { callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiWalletHistory, handleErr);
    if (res.status === 200) {
      yield put(getWalletHistorySuccess(res.data));
      return callback?.();
    } else {
      yield put(getWalletHistoryFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getWalletHistoryFailure(error));
    failure?.();
  }
}
