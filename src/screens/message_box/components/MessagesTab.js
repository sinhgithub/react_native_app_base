import React, { memo, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Conversation, ConversationSkeleton } from 'components/';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR } from 'constants/colors';

const MessagesTab = props => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const listNotificationSkeleton = Array(10)
    .fill('')
    .map((item, index) => {
      return <ConversationSkeleton key={index} />;
    });
  const renderConversations = ({ item }) => {
    return (
      <View style={styles.border}>
        <Conversation />
      </View>
    );
  };
  return (
    <View style={styles.messagesTab}>
      {loading ? (
        listNotificationSkeleton
      ) : (
        <FlatList
          style={styles.flex1}
          keyExtractor={(item, index) => `${item.id || index}`}
          renderItem={renderConversations}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messagesTab: {
    flex: 1
  },
  flex1: {
    flex: 1
  },
  border: {
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1,
    paddingHorizontal: SPACING.XXNormal
  }
});

export default memo(MessagesTab);
