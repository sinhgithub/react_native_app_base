import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import StaticTabBar, { tabHeight as height } from './StaticTabBar';
import { BACKGROUND_COLOR } from 'constants/colors';

const { width } = Dimensions.get('window');

const tabsLength = 5;

const tabWidth = width / tabsLength;

const TabBar = props => {
  return (
    <>
      <View {...{ width, height }} style={styles.container}>
        <View style={styles.absoluteFill}>
          <StaticTabBar value={-width + tabWidth * 2} {...props} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR.MainTab
  },
  absoluteFill: {
    ...StyleSheet.absoluteFill,
    elevation: 5
  }
});

export default React.memo(TabBar);
