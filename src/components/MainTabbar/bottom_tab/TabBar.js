import React from 'react';
import { StyleSheet, View } from 'react-native';
import StaticTabBar, { tabHeight as height } from './StaticTabBar';
import { BACKGROUND_COLOR } from 'constants/colors';

const TabBar = props => {
  return (
    <View {...{ height }} style={styles.container}>
      <StaticTabBar {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.MainTab
  }
});

export default React.memo(TabBar);
