import { CUSTOM_COLOR } from 'constants/colors';
import { BOTTOM_TAB_HEIGHT } from 'constants/size';
import React from 'react';
import { View } from 'react-native';
import BottomTabBar from './bottom_tab/TabBar';

const TabBar = props => {
  const { state, descriptors, navigation } = props;

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return <View />;
  }

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <View
        style={[
          {
            overflow: 'hidden',
            borderTopColor: CUSTOM_COLOR.BasicGray,
            borderTopWidth: 1
          },
          {
            height: BOTTOM_TAB_HEIGHT
          }
        ]}>
        <BottomTabBar {...{ focusedOptions, descriptors, navigation, state }} />
      </View>
    </>
  );
};

export default TabBar;
