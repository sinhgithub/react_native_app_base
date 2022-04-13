import React, { memo, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { translate } from 'src/i18n';
import { ToggleBottomContent } from 'components/';
import ContactItem from './JobContactItem';
import { Icon } from 'components/';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { showCompleteModal } from 'actions/system';
import { getListChatHandle, sendMessageHandle } from 'actions/chat';
import SCREENS_NAME from 'constants/screens';

const JobContact = props => {
  const { data, cardJob } = props;
  const [isShowContent, setIsShowContent] = useState(true);
  const navigation = useNavigation();
  const { conversations } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowContent(true);
    } else {
      setIsShowContent(false);
    }
  }, []);

  const conversationsProcessed = useMemo(() => {
    const result = [];
    if (conversations) {
      for (const k in conversations) {
        result.push(conversations[k]);
      }
    }
    return result;
  }, [conversations]);

  const onAction = type => {
    if (type === 'sendMessage') {
      dispatch(
        sendMessageHandle({
          params: { toUser: cardJob?.employer?.id, message: '' },
          success: () => {
            dispatch(
              getListChatHandle({
                success: () => {
                  conversationsProcessed?.forEach(item => {
                    if (item.replyToId === cardJob?.employer?.id) {
                      navigation.navigate(SCREENS_NAME.DETAIL_CHAT_SCREEN, { data: { item } });
                    }
                  }, []);
                },
                failure: () => {},
                handleErr: () => {}
              })
            );
          },
          failure: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi tin nhắn không thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Vui lòng kiểm tra kết nối',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
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
                onConfirm: () => {},
                onClose: () => {}
              })
            );
          }
        })
      );
    } else if (type === 'contact') {
    }
  };

  return (
    <View style={styles.jobContact}>
      <ToggleBottomContent
        icon={<Icon color={'gray'} name="contacts" size={30} fontName="AntDesign" />}
        title={translate('common.contact')}
        onToggle={handleToggleContent}
      />
      <View style={styles.jobContactContent}>
        {isShowContent ? <ContactItem data={data} onPress={onAction} /> : null}
      </View>
    </View>
  );
};

export default memo(JobContact);
