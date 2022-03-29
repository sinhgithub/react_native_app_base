import { WALLET } from 'actionsType';

const initialState = {
  loadingWallet: false,
  wallets: [],

  walletHistory: [],
  loadingWalletHistory: false,

  loadingWalletWithDraw: false,
  walletWithDraw: [],

  loadingWalletTotal: false,
  walletTotal: [],

  loadingWithdraw: false,
  isWithdrawSuccess: false
};

const wallets = (state = initialState, action) => {
  switch (action.type) {
    case WALLET.GET_WALLET.HANDLER: {
      return {
        ...state,
        loadingWallet: true
      };
    }
    case WALLET.GET_WALLET.SUCCESS: {
      return {
        ...state,
        loadingWallet: false,
        wallets: action.payload
      };
    }
    case WALLET.GET_WALLET.FAILURE: {
      return {
        ...state,
        loadingWallet: false
      };
    }
    // ================================================
    case WALLET.GET_WALLET_HISTORY.HANDLER: {
      return {
        ...state,
        loadingWalletHistory: true
      };
    }
    case WALLET.GET_WALLET_HISTORY.SUCCESS: {
      return {
        ...state,
        loadingWalletHistory: false,
        walletHistory: action.payload
      };
    }
    case WALLET.GET_WALLET_HISTORY.FAILURE: {
      return {
        ...state,
        loadingWalletHistory: false
      };
    }
    // ================================================
    case WALLET.GET_WALLET_WITH_DRAW.HANDLER: {
      return {
        ...state,
        loadingWalletWithDraw: true
      };
    }
    case WALLET.GET_WALLET_WITH_DRAW.SUCCESS: {
      return {
        ...state,
        loadingWalletWithDraw: false,
        walletWithDraw: action.payload
      };
    }
    case WALLET.GET_WALLET_WITH_DRAW.FAILURE: {
      return {
        ...state,
        loadingWalletWithDraw: false
      };
    }
    // ================================================
    case WALLET.GET_WALLET_TOTAL.HANDLER: {
      return {
        ...state,
        loadingWalletTotal: true
      };
    }
    case WALLET.GET_WALLET_TOTAL.SUCCESS: {
      return {
        ...state,
        loadingWalletTotal: false,
        walletTotal: action.payload
      };
    }
    case WALLET.GET_WALLET_TOTAL.FAILURE: {
      return {
        ...state,
        loadingWalletTotal: false
      };
    }
    // ================================================
    case WALLET.WITHDRAW.HANDLER: {
      return {
        ...state,
        loadingWithdraw: true
      };
    }
    case WALLET.WITHDRAW.SUCCESS: {
      return {
        ...state,
        loadingWithdraw: false,
        isWithdrawSuccess: true
      };
    }
    case WALLET.WITHDRAW.FAILURE: {
      return {
        ...state,
        loadingWithdraw: false
      };
    }
    // ================================================
    default:
      return state;
  }
};

export default wallets;
