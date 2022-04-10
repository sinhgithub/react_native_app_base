import { CUSTOM_COLOR } from 'constants/colors';
import moment from 'moment';
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const Notification = props => {
  const { data, onPress } = props;

  return (
    <TouchableOpacity style={styles.notification} onPress={() => onPress?.(data?.id)}>
      <View
        style={[
          styles.notificationStatus,
          { backgroundColor: data?.isRead ? 'blue' : CUSTOM_COLOR.RedBasic }
        ]}
      />
      <View style={styles.notificationContent}>
        <Text numberOfLines={2} style={styles.title}>
          {data?.title}
        </Text>
        <Text numberOfLines={2} style={styles.desc}>
          {data?.content}
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          {data?.createdAt ? moment(data.createdAt).format('DD/MM/YYYY') : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Notification);
