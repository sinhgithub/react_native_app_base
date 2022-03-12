import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Notification = props => {
  return (
    <View style={styles.notification}>
      <View style={styles.notificationStatus} />
      <View style={styles.notificationContent}>
        <Text numberOfLines={2} style={styles.title}>
          TTV Tuyen dung
        </Text>
        <Text numberOfLines={2} style={styles.desc}>
          Chua co gi...
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          15/04/1993
        </Text>
      </View>
    </View>
  );
};

export default memo(Notification);
