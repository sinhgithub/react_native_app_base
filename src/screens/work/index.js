import React, { memo, useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { tabWorkScreen } from 'constants/data_constants';
import { TabsHorizontal } from 'components/';
import ContinueTab from './components/ContinueTab';
import WorkCalendar from './components/WorkCalendar';
import Working from './components/Working';

const WorkScreen = props => {
  const [contentTab, setContentTab] = useState(<ContinueTab />);
  const onChangeTab = useCallback(tab => {
    switch (tab.index) {
      case 0:
        setContentTab(<ContinueTab />);
        break;
      case 1:
        setContentTab(<WorkCalendar />);
        break;
      case 2:
        setContentTab(<Working />);
        break;
      default:
        setContentTab(<ContinueTab />);
        break;
    }
  }, []);

  return (
    <View style={styles.workScreen}>
      <View style={styles.tabs}>
        <TabsHorizontal
          data={tabWorkScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={onChangeTab}
        />
      </View>
      <View style={styles.content}>{contentTab}</View>
    </View>
  );
};

export default memo(WorkScreen);
