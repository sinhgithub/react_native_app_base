import { useNavigation } from '@react-navigation/core';

import AppText from 'components/AppText';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';

import SCREENS_NAME from 'constants/screens';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Image,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Actions, Day, GiftedChat, Bubble } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';
import { scale } from 'utils/responsive';
import { styles } from './styles';
import moment from 'moment';
import { SPACING } from 'constants/size';
import { getListMessageByRoomHandle, sendMessageHandle } from 'actions/chat';
import { ICSend } from 'assets/icons';
import user from 'src/redux/reducers/user';
import { default_avatar } from 'assets/images';
import { Icon } from 'components/';
import { getImageFromHost } from 'src/configs/appConfigs';
import { showCompleteModal } from 'actions/system';

const ChatDetail = props => {
  const dispatch = useDispatch();
  const { data } = props?.route.params;

  const { messages, messagesMeta, loadingMessages } = useSelector(state => state.chat);
  const { user } = useSelector(state => state.user);
  const [page, setPage] = useState(0);
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [sending, setSending] = useState(false);

  const messagesProcessed = useMemo(() => {
    const result = [];
    if (messages) {
      for (const k in messages) {
        result.push(messages[k]);
      }
    }
    return result;
  }, [messages]);

  useEffect(() => {
    dispatch(
      getListMessageByRoomHandle({
        params: { roomId: data?.item?.id, page, size: 20 },
        success: () => {},
        failure: () => {},
        handleErr: () => {}
      })
    );
    let eventDidShowKeyboard;
    let eventDidHideKeyboard;
    if (Platform.OS === 'android') {
      eventDidShowKeyboard = Keyboard.addListener('keyboardDidShow', e => keyboardDidShow(e));
      eventDidHideKeyboard = Keyboard.addListener('keyboardDidHide', e => keyboardDidHide(e));
    }
    return () => {
      eventDidShowKeyboard?.remove();
      eventDidHideKeyboard?.remove();
    };
  }, [dispatch, keyboardDidHide, keyboardDidShow, data, page]);

  useEffect(() => {
    if (messagesProcessed?.length > 0) {
      const temp = messagesProcessed.map((message, index) => {
        // console.log(message, 'message');
        const messagesProps = {
          _id: message?.id,
          isRead: message?.isRead,
          message: message?.message,
          roomId: message?.romId,
          senderId: message?.senderId,
          createdAt: new Date(message.createdAt)
        };
        if (message.senderId === user.id) {
          messagesProps.position = 'right';
          messagesProps.user = {};
        } else {
          messagesProps.position = 'left';
          messagesProps.user = { _id: message?.senderId, name: message?.sender };
        }
        return messagesProps;
      });
      setList(
        temp.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      );
    }
  }, [messagesProcessed, user]);

  const keyboardDidShow = useCallback(e => {}, []);

  const keyboardDidHide = useCallback(e => {}, []);

  const onChangeText = useCallback(text => {
    setValue(text);
  }, []);

  const onFocus = useCallback(() => {}, []);

  const onBlur = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onSendMsg = useCallback(() => {
    if (!sending && !!value) {
      setSending(true);
    }
  }, [sending, value]);

  useEffect(() => {
    if (sending) {
      dispatch(
        sendMessageHandle({
          params: { toUser: 38, message: value },
          success: () => {
            setSending(false);
            makeEmptyValue();
          },
          failure: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi tin nhắn không thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Vui lòng kiểm tra kết nối',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  setSending(false);
                  makeEmptyValue();
                },
                onClose: () => {}
              })
            );
          },
          handleErr: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi tin nhắn không thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Vui lòng kiểm tra kết nối',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  setSending(false);
                  makeEmptyValue();
                },
                onClose: () => {}
              })
            );
          }
        })
      );
    }
  }, [dispatch, makeEmptyValue, sending, value]);

  const makeEmptyValue = useCallback(() => {
    setValue('');
  }, []);

  const renderComposer = useCallback(
    messageProps => {
      return (
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.input}
                type="text"
                value={value}
                placeholder={'Nhập tin nhắn'}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                multiline={true}
                onLayout={e => {
                  const { width, height } = e.nativeEvent.layout;
                  // handleSetInputSize(width, height);
                }}
              />
              {!!value && (
                <TouchableOpacity style={styles.iconEmptyValue} onPress={makeEmptyValue}>
                  <Icon
                    fontName="AntDesign"
                    name="closecircle"
                    size={15}
                    color={BACKGROUND_COLOR.GreenPea}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[
                  styles.sendButtonWrapper,
                  sending && styles.disableSend
                  // inputSize && { width: inputSize.height, height: inputSize.height }
                ]}
                disabled={value === '' || sending}
                onPress={onSendMsg}>
                <ICSend
                  fill={
                    !sending && value !== '' ? BACKGROUND_COLOR.RedBasic : BACKGROUND_COLOR.Gray
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    },
    [makeEmptyValue, onBlur, onChangeText, onFocus, sending, value, onSendMsg]
  );

  const renderCustomView = viewMessageProps => {
    const { position, isRead, message, roomId, senderId } = viewMessageProps?.currentMessage;
    return (
      <View renderToHardwareTextureAndroid ref={ref => {}}>
        <TouchableOpacity onLongPress={e => {}} onPress={() => {}}>
          <Text style={[styles.textMessage]}>{message}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBubble = messageProps => {
    return (
      <Bubble
        user={messageProps.user}
        renderCustomView={() => renderCustomView(messageProps)}
        wrapperStyle={{
          left: {
            marginRight: 0,
            paddingHorizontal: SPACING.XXNormal,
            paddingVertical: SPACING.XXNormal
          },
          right: {
            marginLeft: 0
          }
        }}
        containerStyle={{
          left: { alignItems: 'flex-end', maxWidth: '60%' },
          right: {
            alignItems: 'flex-start',
            backgroundColor: 'red'
          }
        }}
      />
    );
  };

  const renderChatEmpty = useCallback(() => {
    return null;
    // return (
    //   <View style={styles.emptyContainer}>
    //     <Image source={chat_empty} style={styles.imgEmpty} />
    //     <AppText translate style={styles.emptyText}>
    //       {'chat.start_chat'}
    //     </AppText>
    //   </View>
    // );
  }, []);

  const scrollToBottomComponent = useCallback(() => {
    return null;
    // return (
    //   <View style={unreadCount > 0 ? styles.scrollToBottomContainer : null}>
    //     {unreadCount > 0 ? (
    //       <TouchableOpacity style={styles.bottomContainer} onPress={readMessage}>
    //         <ICDownload />
    //         <AppText translate style={styles.unreadText}>
    //           {unreadCount}
    //           {'chat.unread_message'}
    //         </AppText>
    //       </TouchableOpacity>
    //     ) : (
    //       <ICDownload />
    //     )}
    //   </View>
    // );
  }, []);

  const renderSystemMessage = useCallback(() => {
    return null;
  }, []);

  const renderLoadEarlier = () => {
    return null;
    // return (
    //   <View style={styles.loadEarlier}>
    //     {loadingMore ? (
    //       <ActivityIndicator size="small" color={CUSTOM_COLOR.DustyGray} style={styles.indicator} />
    //     ) : null}
    //   </View>
    // );
  };

  const renderDay = messageProps => {
    return <Day {...messageProps} containerStyle={styles.dayContainer} />;
  };

  const renderAvatar = useCallback(() => {
    const avatar = user?.avatar;
    return (
      <View style={styles.avatar}>
        {avatar ? (
          <FastImage
            source={{ uri: getImageFromHost(avatar) }}
            style={styles.avatar}
            resizeMode="cover"
          />
        ) : (
          <Image source={default_avatar} style={styles.avatar} resizeMode="cover" />
        )}
      </View>
    );
  }, [user]);

  const renderFooter = () => {
    return null;
  };
  const loadMore = () => {};

  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1 }}
        onStartShouldSetResponder={() => {
          Keyboard.dismiss();
        }}>
        <GiftedChat
          // ref={scrollViewRef}
          messages={list}
          onSend={onSendMsg}
          renderComposer={renderComposer}
          minComposerHeight={scale(40)}
          maxComposerHeight={scale(40)}
          bottomOffset={Platform.select({
            ios: -24,
            android: 0.1
          })}
          renderBubble={renderBubble}
          isAnimated
          renderChatEmpty={renderChatEmpty}
          renderSystemMessage={renderSystemMessage}
          inverted={true}
          scrollToBottom={true}
          scrollToBottomComponent={scrollToBottomComponent}
          scrollToBottomStyle={{}}
          scrollToBottomOffset={45}
          loadEarlier={true}
          infiniteScroll={true}
          onLoadEarlier={loadMore}
          renderLoadEarlier={renderLoadEarlier}
          listViewProps={{
            // getItemLayout: getItemLayout,
            showsVerticalScrollIndicator: false
          }}
          showUserAvatar={false}
          renderAvatarOnTop={true}
          renderDay={renderDay}
          renderAvatar={renderAvatar}
          renderFooter={renderFooter}
          showAvatarForEveryMessage={false}
        />
      </View>
    </View>
  );
};

export default ChatDetail;
