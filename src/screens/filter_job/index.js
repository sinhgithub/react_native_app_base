import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { TextBoxRadius } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { getListProvinceHandle } from 'actions/master_data';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const FilterJob = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeItem, setActiveItem] = useState({ index: 0, data: null });
  const [search, setSearch] = useState(null);
  const { provinces, loading } = useSelector(state => state.masterData);

  useEffect(() => {
    dispatch(getListProvinceHandle({}));
  }, [dispatch]);

  const listSuggestData = useMemo(() => {
    const result = [];
    if (provinces) {
      for (const k in provinces) {
        result.push(provinces?.[k]?.name);
      }
    }

    return result;
  }, [provinces]);

  const onPressItemFilter = useCallback((data, index) => {
    setActiveItem?.({ index, data });
    setSearch({ index, data });
  }, []);

  useEffect(() => {
    if (search) {
      navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN, { searchProvince: search || activeItem });
    }
  }, [navigation, search]);

  const listSuggest = listSuggestData.map((province, index) => {
    return (
      <TextBoxRadius
        data={province}
        text={province}
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
