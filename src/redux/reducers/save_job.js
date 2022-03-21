import { SAVE_JOB } from 'actionsType';

const initialState = {
  loading: false
};

const saveJob = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOB.SAVE_JOB.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case SAVE_JOB.SAVE_JOB.SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case SAVE_JOB.SAVE_JOB.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default saveJob;
