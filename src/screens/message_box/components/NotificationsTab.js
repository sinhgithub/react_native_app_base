import React, { memo, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Notification, NotificationSkeleton } from 'components/';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR } from 'constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const NotificationsTab = props => {
  const [loading, setLoading] = useState(true);
  const renderNotification = ({ item }) => {
    return (
      <View style={styles.border}>
        <Notification />
      </View>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const listNotificationSkeleton = Array(7)
    .fill('')
    .map((item, index) => {
      return <NotificationSkeleton key={index} />;
    });

  return (
    <View style={styles.notificationTab}>
      {loading ? (
        <ScrollView style={styles.flex1}>{listNotificationSkeleton}</ScrollView>
      ) : (
        <FlatList
          style={styles.flex1}
          keyExtractor={(item, index) => `${item.id || index}`}
          renderItem={renderNotification}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
      )}
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
