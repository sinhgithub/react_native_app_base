import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TabsHorizontal, SearchInput, Icon } from 'components/';
import { tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FindJobScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.findJobScreen}>
      <View style={styles.tabBar}>
        <TabsHorizontal
          data={tabFindJobScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={i => {
            console.log(i);
          }}
        />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.searchArea}>
          <SearchInput
            style={styles.input}
            placeholder="Tìm việc là có, có việc ngay"
            onSearch={() => {}}
          />
          <View style={styles.filter}>
            <Icon name="filter" size={20} fontName="Feather" color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(FindJobScreen);
