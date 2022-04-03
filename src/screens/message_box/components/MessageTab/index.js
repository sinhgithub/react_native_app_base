import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Conversation, ConversationSkeleton } from 'components/';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SwipeListView } from 'react-native-swipe-list-view';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';
import { scale } from 'utils/responsive';
import ICMessageEmpty from 'assets/icons/ic_message_empty';
import AppText from 'components/AppText';
import { FONT_SIZE } from 'constants/appFonts';
import { useDispatch, useSelector } from 'react-redux';
import { getListChatHandle } from 'actions/chat';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const MessagesTab = props => {
  const { conversations, conversationsMeta, loading } = useSelector(state => state.chat);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const conversationsProcessed = useMemo(() => {
    const result = [];
    if (conversations) {
      for (const k in conversations) {
        result.push(conversations[k]);
      }
    }
    return result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }, [conversations]);
  // const listNotificationSkeleton = Array(10)
  //   .fill('')
  //   .map((item, index) => {
  //     return <ConversationSkeleton key={index} />;
  //   });

  useEffect(() => {
    dispatch(getListChatHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getListChatHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    });
    return () => {
      focusListener();
    };
  }, [dispatch, navigation]);

  const onViewDetail = useCallback(
    params => {
      navigation.navigate(SCREENS_NAME.DETAIL_CHAT_SCREEN, params);
    },
    [navigation]
  );

  const renderListChat = useCallback(
    (data, rowMap) => {
      const isLastMessage = data?.index === conversations?.data?.length - 1;
      return (
        <TouchableOpacity
          style={[styles.border, isLastMessage && { borderBottomWidth: 0 }]}
          onPress={() => onViewDetail({ data })}>
          <Conversation data={data} rowMap={rowMap} isLastMessage={isLastMessage} />
        </TouchableOpacity>
      );
    },
    [conversations, onViewDetail]
  );

  const renderEmptyComponent = () => {
    return (
      <View style={styles.listChatEmptyWrapper}>
        <ICMessageEmpty />
        <AppText translate bold={false} style={styles.listChatEmptyTitle}>
          Bạn chưa có tin nhắn
        </AppText>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <ButtonLeft
          conversationId={data?.item?.id}
          markConversationAsRead={() => {}}
          rowMap={rowMap}
          index={data?.index}
        />
        <ButtonRight
          deleteConversation={() => {}}
          conversationId={data?.item?.id}
          isGroup={data?.item?.isGroup}
          rowMap={rowMap}
          index={data?.index}
        />
      </View>
    );
  };
  const keyExtractor = (item, index) => index + '';
  return (
    <View style={styles.messagesTab}>
      <SwipeListView
        contentContainerStyle={styles.listChat}
        refreshing={false}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        data={conversationsProcessed}
        renderItem={renderListChat}
        renderHiddenItem={renderHiddenItem}
        ListEmptyComponent={renderEmptyComponent()}
        leftOpenValue={64}
        rightOpenValue={-64}
        onEndReachedThreshold={0.2}
        // onEndReached={loadMoreListConversation}
        // onRefresh={handleRefreshListConversation}
        scrollEnabled
      />
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
    borderBottomWidth: 1
    // paddingHorizontal: SPACING.XXNormal
  },
  rowBack: {
    width: '100%',
    height: scale(64),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listChatEmptyWrapper: {
    alignItems: 'center',
    flex: 1,
    paddingTop: scale(150)
  },
  listChatEmptyTitle: {
    marginTop: scale(5),
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.textBlack
  }
});

export default memo(MessagesTab);
