import React, { memo, FC, useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { DEVICE_WIDTH } from 'constants/size';

const Tabs = props => {
  const {
    data,
    isDisplayTotal,
    tabActive,
    onPress,
    totalStyle,
    titleStyle,
    containerStyle,
    tabsStyle,
    tabItemStyle
  } = props;

  const [sizeTabsContainer, setSizeTabsContainer] = useState({});
  const getSizeTabsContainer = useCallback(e => {
    const nativeEvent = e.nativeEvent;
    setSizeTabsContainer(nativeEvent.layout);
  }, []);

  const [tabIndex, setTabIndex] = useState(tabActive || 0);

  useEffect(() => {
    onPress?.(tabIndex);
  }, [onPress, tabIndex]);

  const handlePressTab = useCallback(index => {
    setTabIndex?.(index);
  }, []);

  const tabs = data.map((tab, index) => {
    const styleBorderBottom = { borderBottomWidth: tabIndex === index ? 2 : 0 };
    return (
      <TouchableOpacity
        style={[styles.tabItem, styleBorderBottom, tabItemStyle]}
        onPress={() => handlePressTab?.(index)}
        activeOpacity={tabIndex === index ? 1 : 0.6}
        key={`${tab.id || index}`}>
        <Text style={[styles.tabItemTitle, titleStyle]}>{tab.title}</Text>
        {isDisplayTotal && tab.total && (
          <Text style={[styles.tabItemTotal, totalStyle]}>{` (${tab.total})`}</Text>
        )}
      </TouchableOpacity>
    );
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={[styles.tabs, containerStyle]}
      onLayout={e => getSizeTabsContainer(e)}>
      <View style={[styles.tabsContent, tabsStyle]}>{tabs}</View>
    </ScrollView>
  );
};

export default memo(Tabs);
