import { NOTIFICATION } from 'actionsType';

const initialState = {
  loading: false,
  notifyList: null,
  metaNotifyList: null,

  loadingNotifyDetail: false,
  notifyDetail: null
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION.GET_LIST_NOTIFY.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case NOTIFICATION.GET_LIST_NOTIFY.SUCCESS: {
      const { data, metadata } = action.payload;
      const newData = {};
      data.forEach(item => {
        newData[item.id] = item;
      });
      return {
        ...state,
        loading: false,
        metaNotifyList: metadata,
        notifyList: newData
      };
    }
    case NOTIFICATION.GET_LIST_NOTIFY.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    // =================================================

    case NOTIFICATION.GET_DETAIL_NOTIFY.HANDLER: {
      return {
        ...state,
        loadingNotifyDetail: true
      };
    }

    case NOTIFICATION.GET_DETAIL_NOTIFY.SUCCESS: {
      return {
        ...state,
        loadingNotifyDetail: false,
        notifyDetail: action.payload
      };
    }
    case NOTIFICATION.GET_DETAIL_NOTIFY.FAILURE: {
      return {
        ...state,
        loadingNotifyDetail: false
      };
    }
    // =================================================

    default:
      return state;
  }
};

export default notification;
