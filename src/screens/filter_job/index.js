import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { TextBoxRadius } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { getListProvinceHandle } from 'actions/master_data';
import { useNavigation } from '@react-navigation/core';
import { setFilterJobByProvince } from 'actions/system';

const FilterJob = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { provinces } = useSelector(state => state.masterData);

  const listSuggestData = useMemo(() => {
    const result = [];
    if (provinces) {
      for (const k in provinces) {
        result.push(provinces?.[k]);
      }
    }
    return result;
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
      navigation.goBack();
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
