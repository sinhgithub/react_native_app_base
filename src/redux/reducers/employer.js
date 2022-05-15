import { EMPLOYER } from 'actionsType';

const initialState = {
  loading: false,
  employers: null,

  loadingEmployerJobs: false,
  employerJobs: null
};

const employers = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYER.GET_EMPLOYER.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case EMPLOYER.GET_EMPLOYER.SUCCESS: {
      return {
        ...state,
        loading: false,
        employers: action.payload
      };
    }
    case EMPLOYER.GET_EMPLOYER.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    // ===========================================
    case EMPLOYER.GET_EMPLOYER_RECRUITMENT.HANDLER: {
      return {
        ...state,
        loadingEmployerJobs: true
      };
    }

    case EMPLOYER.GET_EMPLOYER_RECRUITMENT.SUCCESS: {
      return {
        ...state,
        loadingEmployerJobs: false,
        employerJobs: action.payload
      };
    }
    case EMPLOYER.GET_EMPLOYER_RECRUITMENT.FAILURE: {
      return {
        ...state,
        loadingEmployerJobs: false
      };
    }
    default:
      return state;
  }
};

export default employers;
