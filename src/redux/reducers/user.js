import { USER } from 'actionsType';

const initialState = {
  loading: false,
  user: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER.GET_USER.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case USER.GET_USER.SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    case USER.GET_USER.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default user;
