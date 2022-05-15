import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppText } from 'src/components';
import { ICMenu, ICLogo, ICNotification, ICBack } from 'assets/icons';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const HomeHeader = props => {
  const { isShowBack, onPressLogo, onPressNoti } = props;
  const navigation = useNavigation();
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
        <ICLogo />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNoti} style={{ width: '32%', alignItems: 'flex-end' }}>
        <ICNotification color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(HomeHeader);
