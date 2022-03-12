import React, { memo, useCallback, useState, useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { TextBoxRadius } from 'components/';
import provincesVNData from 'src/global/provincesVNData.json';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';

const FilterJob = props => {
  const [activeItem, setActiveItem] = useState(0);
  const listSuggestData = useMemo(() => {
    const result = [];
    for (const k in provincesVNData) {
      let name = provincesVNData[k].name
        .toUpperCase()
        .replace('TỈNH ', '')
        .replace('THÀNH PHỐ ', '');
      result.push(name);
    }
    return result;
  }, []);

  const onPressItemFilter = useCallback((data, index) => {
    setActiveItem?.(index);
  }, []);

  const listSuggest = listSuggestData.map((province, index) => {
    return (
      <TextBoxRadius
        data={province}
        text={province}
        index={index}
        activeItem={activeItem}
        onPress={onPressItemFilter}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khu vực tuyển dụng</Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.rowWrap}>{listSuggest}</View>
      </ScrollView>
    </View>
  );
};

export default memo(FilterJob);
