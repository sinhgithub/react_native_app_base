import { RECEIVE_JOB } from 'actionsType';

const initialState = {
  loading: false,
  jobReceived: null,
  isReceived: false
};

const receiveJob = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_JOB.RECEIVE_JOB.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case RECEIVE_JOB.RECEIVE_JOB.SUCCESS: {
      return {
        ...state,
        loading: false,
        jobReceived: action.payload,
        isReceived: true
      };
    }
    case RECEIVE_JOB.RECEIVE_JOB.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default receiveJob;
