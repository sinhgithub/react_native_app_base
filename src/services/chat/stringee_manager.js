class StringeeManager {
  constructor() {
    this.client = null;
  }
  setClient(client) {
    this.client = client;
  }
  connect = token => {
    this.client?.connect(token);
  };
  createConversation = (chatPartners, options, callback = () => {}) => {
    this.client?.createConversation(
      chatPartners,
      options,
      (status, code, message, conversation) => {
        callback(status, code, message, conversation);
      }
    );
  };
  sendMessage = (message, callback = () => {}) => {
    this.client?.sendMessage(message, (status, code, message) => {
      callback(status, code, message);
    });
  };
  deleteMessage = (conversationId, id, callback = () => {}) => {
    this.client?.deleteMessage(conversationId, id, (status, code, message) => {
      callback(status, code, message);
    });
  };
  pinMessage = (conversationId, id, isPin, callback = () => {}) => {
    this.client?.pinMessage(conversationId, id, isPin, (status, code, message) => {
      callback(status, code, message);
    });
  };
  getLastConversations = (count, isAscending, callback = () => {}) => {
    this.client?.getLastConversations(
      count,
      isAscending,
      (statusConvd, codeConvd, messageConvd, conversations) => {
        callback(statusConvd, codeConvd, messageConvd, conversations);
      }
    );
  };
  getLastMessages = (
    conversationId,
    count,
    isAscending,
    isLoadDeletedMessage,
    isLoadDeletedMessageContent,
    callback = () => {}
  ) => {
    this.client?.getLastMessages(
      conversationId,
      count,
      isAscending,
      isLoadDeletedMessage,
      isLoadDeletedMessageContent,
      (status, code, message, messages) => {
        callback(status, code, message, messages);
      }
    );
  };
  getMessagesBefore = (
    conversationId,
    seq,
    count,
    isAscending,
    isLoadDeletedMessage,
    isLoadDeletedMessageContent,
    callback = () => {}
  ) => {
    this.client?.getMessagesBefore(
      conversationId,
      seq,
      count,
      isAscending,
      isLoadDeletedMessage,
      isLoadDeletedMessageContent,
      (status, code, message, messages) => {
        callback(status, code, message, messages);
      }
    );
  };
  addParticipants = (conversationId, memberListAdded, callback = () => {}) => {
    this.client?.addParticipants(
      conversationId,
      memberListAdded,
      (status, code, message, users) => {
        callback(status, code, message, users);
      }
    );
  };
  removeParticipants = (idConversation, userIds, callback = () => {}) => {
    this.client?.removeParticipants(idConversation, userIds, (status, code, message, users) => {
      callback(status, code, message, users);
    });
  };
  deleteConversation = (convId, callback = () => {}) => {
    this.client?.deleteConversation(convId, (status, code, message) => {
      console.log('deleteConversation90', status, code, message);
      // bug from stringee, not run call back
      callback(status, code, message);
    });
  };
  markConversationAsRead = (conversationId, callback = () => {}) => {
    this.client?.markConversationAsRead(conversationId, (status, code, message) => {
      callback(status, code, message);
    });
  };
  registerPush = (token, isProduction, isVoip, callback = () => {}) => {
    this.client?.registerPush(token, isProduction, isVoip, (status, code, message) => {
      callback(status, code, message);
    });
  };
  revokeMessage = (convId, messageId, callback) => {
    this.client?.revokeMessage(convId, messageId, (status, code, message) => {
      callback?.(status, code, message);
    });
  };
  editMessage = (convId, messageId, newContent, callback) => {
    this.client?.editMessage(convId, messageId, newContent, (status, code, message) => {
      callback?.(status, code, message);
    });
  };
}
export const stringeeManager = new StringeeManager();
