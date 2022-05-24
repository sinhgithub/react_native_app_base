import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { tabWorkScreen } from 'constants/data_constants';
import { TabsHorizontal } from 'components/';
import WorkCalendar from './components/WorkCalendar';
import Working from './components/Working';
import Income from 'screens/income';

const WorkScreen = props => {
  const [contentTab, setContentTab] = useState(<Income />);
  const onChangeTab = useCallback(tab => {
    switch (tab.index) {
      case 0:
        setContentTab(<Income />);
        break;
      case 1:
        setContentTab(<WorkCalendar />);
        break;
      case 2:
        setContentTab(<Working />);
        break;
      default:
        setContentTab(<Income />);
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
