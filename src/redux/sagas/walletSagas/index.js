import { WALLET } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getWalletSaga } from './getWalletSaga';
import { getWalletHistorySaga } from './getWalletHistorySaga';
import { getWalletWithDrawSaga } from './getWalletWithDrawSaga';
import { getWalletTotalSaga } from './getWalletTotalSaga';
import { withDrawSaga } from './withdraw';
export default function* walletSagas() {
  yield takeLatest(WALLET.GET_WALLET.HANDLER, getWalletSaga);
  yield takeLatest(WALLET.GET_WALLET_HISTORY.HANDLER, getWalletHistorySaga);
  yield takeLatest(WALLET.GET_WALLET_WITH_DRAW.HANDLER, getWalletWithDrawSaga);
  yield takeLatest(WALLET.GET_WALLET_TOTAL.HANDLER, getWalletTotalSaga);
  yield takeLatest(WALLET.WITHDRAW.HANDLER, withDrawSaga);
}
