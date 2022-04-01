import { USER } from 'actionsType';

const initialState = {
  loading: false,
  user: null,

  loadingSkills: false,
  skills: null
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
    // ==================================
    case USER.GET_SKILL_CRITERIA.HANDLER: {
      return {
        ...state,
        loadingSkills: true
      };
    }

    case USER.GET_SKILL_CRITERIA.SUCCESS: {
      return {
        ...state,
        loadingSkills: false,
        skills: action.payload
      };
    }
    case USER.GET_SKILL_CRITERIA.FAILURE: {
      return {
        ...state,
        loadingSkills: false
      };
    }
    default:
      return state;
  }
};

export default user;
