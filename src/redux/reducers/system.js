import { SYSTEM } from 'actionsType';

const initialState = {
  // modal
  animatedBottomModal: {
    isDisplay: false,
    content: null,
    completeModal: null,
    confirmModal: null
  }
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

    default:
      return state;
  }
};

export default system;
