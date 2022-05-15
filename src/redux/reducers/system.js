import { SYSTEM } from 'actionsType';

const initialState = {
  // modal
  animatedBottomModal: {
    isDisplay: false,
    content: null,
    completeModal: null,
    confirmModal: null
  },

  tabIndexMessageBox: 0,
  filterJobByProvince: null,

  isFocusInput: false,

  filterJobByCategory: null
};

const system = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM.SET_ANIMATED_BOTTOM_MODAL.SUCCESS: {
      return {
        ...state,
        animatedBottomModal: {
          ...state.animatedBottomModal,
          ...action.payload
        }
      };
    }
    case SYSTEM.SET_ANIMATED_BOTTOM_MODAL.FAILURE: {
      return {
        ...state,
        animatedBottomModal: {
          isDisplay: false,
          content: null
        }
      };
    }
    // complete modal
    case SYSTEM.SHOW_COMPLETE_MODAL.SUCCESS: {
      return {
        ...state,
        completeModal: action.payload
      };
    }
    case SYSTEM.CLEAR_COMPLETE_MODAL.SUCCESS: {
      return {
        ...state,
        completeModal: null
      };
    }

    // confirm modal
    case SYSTEM.SHOW_CONFIRM_MODAL.SUCCESS: {
      return {
        ...state,
        confirmModal: action.payload
      };
    }
    case SYSTEM.CLEAR_CONFIRM_MODAL.SUCCESS: {
      return {
        ...state,
        confirmModal: null
      };
    }
    // ===============================================
    case SYSTEM.SET_MESSAGE_BOX_TAB_INDEX: {
      return {
        ...state,
        tabIndexMessageBox: action.payload
      };
    }
    // ===============================================
    case SYSTEM.SET_FILTER_JOB_BY_PROVINCE: {
      return {
        ...state,
        filterJobByProvince: action.payload
      };
    }
    case SYSTEM.CLEAN_FILTER_JOB_BY_PROVINCE: {
      return {
        ...state,
        filterJobByProvince: null
      };
    }
    // ===============================================
    case SYSTEM.SET_FOCUS_INPUT: {
      return {
        ...state,
        isFocusInput: action.payload
      };
    }
    // ===============================================
    case SYSTEM.SET_FILTER_JOB_BY_CATEGORY: {
      return {
        ...state,
        filterJobByCategory: action.payload
      };
    }
    case SYSTEM.CLEAN_FILTER_JOB_BY_CATEGORY: {
      return {
        ...state,
        filterJobByCategory: null
      };
    }
    default:
      return state;
  }
};

export default system;
