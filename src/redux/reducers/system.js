import { SYSTEM } from 'actionsType';

const initialState = {
  animatedBottomModal: {
    isDisplay: false,
    content: null
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
    default:
      return state;
  }
};

export default system;
