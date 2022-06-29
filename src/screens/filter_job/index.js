import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { TextBoxRadius } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { getListProvinceHandle } from 'actions/master_data';
import { useNavigation } from '@react-navigation/core';
import { setFilterJobByProvince } from 'actions/system';
import SCREENS_NAME from 'constants/screens';

const FilterJob = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { provinces } = useSelector(state => state.masterData);

  const listSuggestData = useMemo(() => {
    const result = [];
    if (provinces) {
      for (const k in provinces) {
        switch (provinces?.[k].name.toLowerCase()) {
          case 'hồ chí minh':
            provinces[k].order = 1;
            break;
          case 'bình dương':
            provinces[k].order = 2;
            break;
          case 'đồng nai':
            provinces[k].order = 3;
            break;
          case 'hà nội':
            provinces[k].order = 4;
            break;
          default:
            provinces[k].order = 5;
            break;
        }
        result.push(provinces?.[k]);
      }
    }
    return result.sort((a, b) => a.order - b.order);
  }, [provinces]);

  const [activeItem, setActiveItem] = useState({ index: 0, data: listSuggestData[0] });
  const [search, setSearch] = useState(null);

  useEffect(() => {
    dispatch(getListProvinceHandle({}));
  }, [dispatch]);

  const onPressItemFilter = useCallback((data, index) => {
    setActiveItem?.({ index, data });
    setSearch({ index, data });
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(setFilterJobByProvince({ ...search, tabIndex: 0 }));
      navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN);
    }
  }, [activeItem, dispatch, navigation, search]);

  const listSuggest = listSuggestData.map((province, index) => {
    return (
      <TextBoxRadius
        data={province}
        index={index}
        activeItem={activeItem.index}
        onPress={onPressItemFilter}
        key={index}
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
