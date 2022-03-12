import { GET_LIST_JOB, FILTER } from 'actionsType';

const initialState = {
  loading: false,
  listJobHomePage: [],
  listAllJob: [],
  listAllJobFiltered: null
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

    case GET_LIST_JOB.ALL_JOB.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_LIST_JOB.ALL_JOB.SUCCESS: {
      return {
        ...state,
        loading: false,
        listAllJob: action.payload
      };
    }
    case GET_LIST_JOB.ALL_JOB.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case FILTER.FILTER_JOB_BY_LIST.ORIGIN: {
      let newData = [];
      console.log(action?.payload, 'action.payload');
      switch (action.payload) {
        case 0:
          newData = [...state.listAllJob.data];
          break;
        case 1:
          newData = state.listAllJob.data.filter(item => item);
          break;
        case 2:
          newData = state.listAllJob.data.filter(item => item);
          break;
        case 'reset':
          newData = null;
          break;
        default:
          newData = [...state.listAllJob.data];
          break;
      }
      return {
        ...state,
        listAllJobFiltered: newData
      };
    }
    default:
      return { ...state };
  }
};

export default listJob;
