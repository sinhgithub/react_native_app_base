import { MASTER_DATA } from 'actionsType';

const initialState = {
  loading: false,
  provinces: [],

  loadingTeamSize: false,
  teamSize: null,

  loadingBusinessCategories: false,
  businessCategories: null,

  loadingDemandSize: false,
  listDemandSize: null,

  loadingDistrict: false,
  districts: null
};

const masterData = (state = initialState, action) => {
  switch (action.type) {
    case MASTER_DATA.LIST_PROVINCE.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case MASTER_DATA.LIST_PROVINCE.SUCCESS: {
      return {
        ...state,
        loading: false,
        provinces: action.payload
      };
    }
    case MASTER_DATA.LIST_PROVINCE.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    // ==========================================================
    case MASTER_DATA.LIST_TEAM_SIZE.HANDLER: {
      return {
        ...state,
        loadingTeamSize: true
      };
    }

    case MASTER_DATA.LIST_TEAM_SIZE.SUCCESS: {
      return {
        ...state,
        loadingTeamSize: false,
        teamSize: action.payload
      };
    }
    case MASTER_DATA.LIST_TEAM_SIZE.FAILURE: {
      return {
        ...state,
        loadingTeamSize: false
      };
    }

    // ==========================================================
    case MASTER_DATA.LIST_BUSINESS_CATEGORY.HANDLER: {
      return {
        ...state,
        loadingTeamSize: true
      };
    }

    case MASTER_DATA.LIST_BUSINESS_CATEGORY.SUCCESS: {
      return {
        ...state,
        loadingBusinessCategories: false,
        businessCategories: action.payload
      };
    }
    case MASTER_DATA.LIST_BUSINESS_CATEGORY.FAILURE: {
      return {
        ...state,
        loadingBusinessCategories: false
      };
    }

    // ==========================================================
    case MASTER_DATA.LIST_DEMAND_SIZE.HANDLER: {
      return {
        ...state,
        loadingDemandSize: true
      };
    }

    case MASTER_DATA.LIST_DEMAND_SIZE.SUCCESS: {
      return {
        ...state,
        loadingDemandSize: false,
        listDemandSize: action.payload
      };
    }
    case MASTER_DATA.LIST_DEMAND_SIZE.FAILURE: {
      return {
        ...state,
        loadingDemandSize: false
      };
    }

    // ==========================================================
    case MASTER_DATA.GET_LIST_DISTRICT.HANDLER: {
      return {
        ...state,
        loadingDistrict: true
      };
    }

    case MASTER_DATA.GET_LIST_DISTRICT.SUCCESS: {
      return {
        ...state,
        loadingDistrict: false,
        districts: action.payload
      };
    }
    case MASTER_DATA.GET_LIST_DISTRICT.FAILURE: {
      return {
        ...state,
        loadingDistrict: false
      };
    }

    default:
      return state;
  }
};

export default masterData;
