import { WALLET } from 'actionsType';

export const getWalletHandle = payload => ({
  type: WALLET.GET_WALLET.HANDLER,
  payload
});
export const getWalletSuccess = payload => ({
  type: WALLET.GET_WALLET.SUCCESS,
  payload
});
export const getWalletFailure = payload => ({
  type: WALLET.GET_WALLET.SUCCESS,
  payload
});
// =============
export const getWalletWithDrawHandle = payload => ({
  type: WALLET.GET_WALLET_WITH_DRAW.HANDLER,
  payload
});
export const getWalletWithDrawSuccess = payload => ({
  type: WALLET.GET_WALLET_WITH_DRAW.SUCCESS,
  payload
});
export const getWalletWithDrawFailure = payload => ({
  type: WALLET.GET_WALLET_WITH_DRAW.FAILURE,
  payload
});
// =============
export const getWalletHistoryHandle = payload => ({
  type: WALLET.GET_WALLET_HISTORY.HANDLER,
  payload
});
export const getWalletHistorySuccess = payload => ({
  type: WALLET.GET_WALLET_HISTORY.SUCCESS,
  payload
});
export const getWalletHistoryFailure = payload => ({
  type: WALLET.GET_WALLET_HISTORY.FAILURE,
  payload
});
// =============
export const getWalletTotalHandle = payload => ({
  type: WALLET.GET_WALLET_TOTAL.HANDLER,
  payload
});
export const getWalletTotalSuccess = payload => ({
  type: WALLET.GET_WALLET_TOTAL.SUCCESS,
  payload
});
export const getWalletTotalFailure = payload => ({
  type: WALLET.GET_WALLET_TOTAL.FAILURE,
  payload
});

// =============
export const withdrawHandle = payload => ({
  type: WALLET.WITHDRAW.HANDLER,
  payload
});
export const withdrawSuccess = payload => ({
  type: WALLET.WITHDRAW.SUCCESS,
  payload
});
export const withdrawFailure = payload => ({
  type: WALLET.WITHDRAW.FAILURE,
  payload
});
