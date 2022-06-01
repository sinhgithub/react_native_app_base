import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Notification } from 'components/';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR } from 'constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailNotifyHandle, getListNotifyHandle } from 'actions/notification';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const NotificationsTab = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { notifyList } = useSelector(state => state.notification);

  const notifyListProcessed = useMemo(() => {
    const result = [];
    if (notifyList) {
      for (const k in notifyList) {
        result.push(notifyList[k]);
      }
    }
    return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [notifyList]);

  const onPressNotify = useCallback(
    id => {
      navigation.navigate(SCREENS_NAME.NOTIFY_DETAIL_SCREEN, { id });
      dispatch(
        getDetailNotifyHandle({
          params: id,
          success: () => {},
          failure: () => {},
          handleErr: () => {}
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    });
    return () => {
      focusListener();
    };
  }, [dispatch, navigation]);

  const renderNotification = ({ item, index }) => {
    return (
      <View style={styles.border}>
        <Notification data={item} onPress={onPressNotify} />
      </View>
    );
  };

  return (
    <View style={styles.notificationTab}>
      <FlatList
        style={styles.flex1}
        keyExtractor={(item, index) => `${item.id || index}`}
        renderItem={renderNotification}
        data={notifyListProcessed || []}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationTab: {
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

export default memo(NotificationsTab);
