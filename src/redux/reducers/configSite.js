import { CONFIG_SITE } from 'actionsType';

const initialState = {
  loading: false,
  configSite: null
};

const configSite = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_SITE.GET_CONFIG_SITE.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case CONFIG_SITE.GET_CONFIG_SITE.SUCCESS: {
      return {
        ...state,
        loading: false,
        configSite: action.payload
      };
    }
    case CONFIG_SITE.GET_CONFIG_SITE.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default configSite;
