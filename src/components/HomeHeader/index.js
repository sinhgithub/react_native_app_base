import React, { memo, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';
import { ICMenu, ICLogo, ICNotification, ICBack } from 'assets/icons';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { FONT_SIZE } from 'constants/appFonts';
import { setTabIndexMessageBox } from 'actions/system';
import { ic_logo } from 'assets/images';

const HomeHeader = props => {
  const { isShowBack, onPressLogo } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { notifyList } = useSelector(state => state.notification);
  const onPressNoti = () => {
    dispatch(setTabIndexMessageBox(1));
    navigation.navigate(SCREENS_NAME.MESSAGE_BOX_SCREEN, {});
  };
  const notifyListUnread = useMemo(() => {
    const result = [];
    if (notifyList) {
      for (const k in notifyList) {
        if (!notifyList[k].isRead) {
          result.push(notifyList[k]);
        }
      }
    }
    return result;
  }, [notifyList]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', width: '32%' }}>
        {!isShowBack ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS_NAME.MENU_SCREEN, {});
            }}>
            <ICMenu />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ICBack />
            <AppText>Quay lại</AppText>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogo} style={{ width: '32%', alignItems: 'center' }}>
        <Image source={ic_logo} style={styles.logo} resizeMode="stretch" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNoti} style={{ width: '32%', alignItems: 'flex-end' }}>
        {!notifyListUnread?.length > 0 && (
          <>
            <Text
              style={{
                position: 'absolute',
                top: -10,
                right: -6,
                zIndex: 1,
                color: 'red',
                fontSize: FONT_SIZE.Small
              }}>{`${notifyListUnread.length}`}</Text>
            <ICNotification color="red" />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(HomeHeader);
