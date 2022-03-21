import { GET_LIST_JOB, FILTER } from 'actionsType';

const initialState = {
  loading: false,
  listJobHomePage: [],
  listAllJob: {},
  listAllJobFiltered: null,
  metaData: {},
  loadingFollowJob: false,
  listFollowJob: {},
  metaDataFollowJob: {},
  listApplyJob: {},
  loadingApplyJob: false,
  metaDataApplyJob: {},
  listAppliedJob: {},
  loadingAppliedJob: false,
  metaDataAppliedJob: {}
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
      const { isLoadMore } = action.payload;
      return {
        ...state,
        loading: isLoadMore ? false : true
      };
    }
    case GET_LIST_JOB.ALL_JOB.SUCCESS: {
      const { data, metadata } = action.payload;
      const newData = { ...state.listAllJob };
      data.forEach(item => {
        newData[item.id] = item;
      }, []);

      return {
        ...state,
        loading: false,
        listAllJob: newData,
        metaData: metadata
      };
    }
    case GET_LIST_JOB.ALL_JOB.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    case GET_LIST_JOB.FOLLOW_JOB.HANDLER: {
      const { isLoadMore } = action.payload;
      return {
        ...state,
        loadingFollowJob: isLoadMore ? false : true
      };
    }
    case GET_LIST_JOB.FOLLOW_JOB.SUCCESS: {
      const { data, metadata } = action.payload;
      const newData = { ...state.listFollowJob };
      data.forEach(item => {
        newData[item.id.job.id] = item.id.job;
      }, []);
      return {
        ...state,
        loadingFollowJob: false,
        listFollowJob: newData,
        metaDataFollowJob: metadata
      };
    }
    case GET_LIST_JOB.FOLLOW_JOB.FAILURE: {
      return {
        ...state,
        loadingFollowJob: false
      };
    }

    case GET_LIST_JOB.APPLY_JOB.HANDLER: {
      const { isLoadMore } = action.payload;
      return {
        ...state,
        loadingApplyJob: isLoadMore ? false : true
      };
    }
    case GET_LIST_JOB.APPLY_JOB.SUCCESS: {
      const { data, metadata } = action.payload;
      const newData = { ...state.listApplyJob };
      data.forEach(item => {
        newData[item.id.job.id] = item.id.job;
      }, []);
      return {
        ...state,
        loadingApplyJob: false,
        listApplyJob: newData,
        metaDataApplyJob: metadata
      };
    }
    case GET_LIST_JOB.APPLY_JOB.FAILURE: {
      return {
        ...state,
        loadingApplyJob: false
      };
    }

    case GET_LIST_JOB.APPLIED_JOB.HANDLER: {
      const isLoadMore = action?.payload?.isLoadMore;
      return {
        ...state,
        loadingAppliedJob: isLoadMore ? false : true
      };
    }
    case GET_LIST_JOB.APPLIED_JOB.SUCCESS: {
      const { data, metadata } = action.payload;
      const newData = { ...state.listAppliedJob };
      data.forEach(item => {
        newData[item.id.job.id] = item.id.job;
      }, []);
      return {
        ...state,
        loadingAppliedJob: false,
        listAppliedJob: newData,
        metaDataAppliedJob: metadata
      };
    }
    case GET_LIST_JOB.APPLIED_JOB.FAILURE: {
      return {
        ...state,
        loadingAppliedJob: false
      };
    }
    default:
      return { ...state };
  }
};

export default listJob;
