import { CHAT } from 'actionsType';

const initialState = {
  loading: false,
  conversations: null,
  conversationsMeta: null,

  messages: null,
  messagesMeta: null,
  loadingMessages: false
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case CHAT.GET_LIST_CHAT.HANDLER: {
      return {
        ...state,
        loading: true
      };
    }

    case CHAT.GET_LIST_CHAT.SUCCESS: {
      const { conversations, conversationsMeta } = action.payload;
      return {
        ...state,
        loading: false,
        conversations,
        conversationsMeta
      };
    }
    case CHAT.GET_LIST_CHAT.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    // =================================================
    case CHAT.GET_LIST_MESSAGE_BY_ROOM.HANDLER: {
      return {
        ...state,
        loadingMessages: true
      };
    }

    case CHAT.GET_LIST_MESSAGE_BY_ROOM.SUCCESS: {
      const { messagesMeta, messages } = action.payload;
      return {
        ...state,
        loading: false,
        messages,
        messagesMeta
      };
    }
    case CHAT.GET_LIST_MESSAGE_BY_ROOM.FAILURE: {
      return {
        ...state,
        loadingMessages: false
      };
    }
    // =================================================
    default:
      return state;
  }
};

export default chat;
