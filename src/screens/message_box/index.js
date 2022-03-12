import React, { memo, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { tabMessageBoxScreen } from 'constants/data_constants';
import { TabsHorizontal } from 'components/';
import styles from './styles';
import MessagesTab from './components/MessagesTab';
import NotificationsTab from './components/NotificationsTab';

const MessageBoxScreen = props => {
  const [contentTab, setContentTab] = useState(<MessagesTab />);
  const onChangeTab = useCallback(tab => {
    switch (tab.index) {
      case 0:
        setContentTab(<MessagesTab />);
        break;
      case 1:
        setContentTab(<NotificationsTab />);
        break;

      default:
        setContentTab(<MessagesTab />);
        break;
    }
  }, []);
  return (
    <View style={styles.messageBox}>
      <View style={styles.tabs}>
        <TabsHorizontal
          data={tabMessageBoxScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={onChangeTab}
        />
      </View>
      <View style={styles.content}>{contentTab}</View>
    </View>
  );
};

export default memo(MessageBoxScreen);
