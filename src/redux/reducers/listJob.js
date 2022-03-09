import { GET_LIST_JOB } from 'actionsType';

const initialState = {
  loading: false,
  listJobHomePage: []
};

const listJob = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_JOB.HOME_PAGE.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_LIST_JOB.HOME_PAGE.SUCCESS: {
      return {
        ...state,
        loading: false,
        listJobHomePage: action.payload
      };
    }
    case GET_LIST_JOB.HOME_PAGE.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return { ...state };
  }
};

export default listJob;
