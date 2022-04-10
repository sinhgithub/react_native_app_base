import React, { memo, useCallback, useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

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

  const initTabIndex = useMemo(() => {
    if (tabActive) {
      return { index: tabActive, isClick: false };
    }
    return { index: 0, isClick: false };
  }, [tabActive]);

  const [tabIndex, setTabIndex] = useState(initTabIndex);
  const { filterJobByProvince } = useSelector(state => state.system);
  useEffect(() => {
    if (tabIndex.isClick) {
      onPress?.(tabIndex);
    }
  }, [onPress, tabIndex]);

  useEffect(() => {
    if (filterJobByProvince) {
      handlePressTab(filterJobByProvince.tabIndex);
    }
  }, [filterJobByProvince]);

  const handlePressTab = useCallback(
    index => {
      setTabIndex?.(prev => {
        if (prev.index !== index) {
          return { index, isClick: true };
        }
        return tabIndex;
      });
    },
    [tabIndex]
  );

  const tabs = data.map((tab, index) => {
    const styleBorderBottom = { borderBottomWidth: tabIndex.index === index ? 2 : 0 };
    return (
      <TouchableOpacity
        style={[
          styles.tabItem,
          { width: data?.length > 0 ? `${100 / data?.length}%` : 'auto' },
          styleBorderBottom,
          tabItemStyle
        ]}
        onPress={() => handlePressTab?.(index)}
        activeOpacity={tabIndex.index === index ? 1 : 0.6}
        key={`${tab.id || index}`}>
        <Text style={[styles.tabItemTitle, titleStyle]}>{tab.title}</Text>
        {isDisplayTotal && tab.total && (
          <Text style={[styles.tabItemTotal, totalStyle]}>{` (${tab.total})`}</Text>
        )}
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={[styles.tabs, containerStyle]}>
      <View style={[styles.tabsContent, tabsStyle]}>{tabs}</View>
    </View>
  );
};

export default memo(Tabs);
