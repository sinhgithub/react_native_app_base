import React, { memo, useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { tabMessageBoxScreen } from 'constants/data_constants';
import { TabsHorizontal } from 'components/';
import styles from './styles';
import MessagesTab from './components/MessageTab';
import NotificationsTab from './components/NotificationsTab';
import { useSelector } from 'react-redux';

const MessageBoxScreen = props => {
  const { tabIndexMessageBox } = useSelector(state => state.system);

  const [contentTab, setContentTab] = useState(<MessagesTab />);

  useEffect(() => {
    if (tabIndexMessageBox > 0) {
      onChangeTab({ index: tabIndexMessageBox });
    }
  }, [tabIndexMessageBox]);

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
          tabActive={tabIndexMessageBox}
        />
      </View>
      <View style={styles.content}>{contentTab}</View>
    </View>
  );
};

export default memo(MessageBoxScreen);
