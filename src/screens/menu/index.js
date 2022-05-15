import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { useDispatch } from 'react-redux';

import MenuItem from './MenuItem';
import { logout } from 'actions/auth';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const idsMenu = {
  logout: 'logout',
  testPayment: 'testPayment'
};

const MenuScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPressMenu = id => {
    switch (id) {
      case idsMenu.logout:
        dispatch(logout());
        break;
      case idsMenu.testPayment:
        navigation.navigate(SCREENS_NAME.PAYMENT_SCREEN, {});
        break;
      default:
        break;
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <MenuItem title="Đăng xuất" id={idsMenu.logout} onPress={onPressMenu} />
        <MenuItem title="Test UI trang thanh toán" id={idsMenu.testPayment} onPress={onPressMenu} />
        <MenuItem title="Điều khoản" />
        <MenuItem title="Liên hệ" />
      </View>
    </ScrollView>
  );
};

export default memo(MenuScreen);
