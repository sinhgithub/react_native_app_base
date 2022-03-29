import { MASTER_DATA } from 'actionsType';

const initialState = {
  loading: false,
  provinces: []
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

    default:
      return state;
  }
};

export default masterData;
