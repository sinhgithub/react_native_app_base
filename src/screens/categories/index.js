import React, { memo, useEffect, useMemo } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { getListJobHomePageHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';
import CardCategoryBg from 'components/CardCategoryBg';
import { divisionArray } from 'helpers/divisionArray';
const maxItemInRow = 3;

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { businessCategories } = useSelector(state => state.masterData);

  const businessCategoriesProcessed = useMemo(() => {
    return Object.values(businessCategories || {});
  }, [businessCategories]);

  useEffect(() => {
    dispatch(getListJobHomePageHandle({}));
  }, [dispatch]);

  const listCategory = businessCategoriesProcessed?.map((item, index) => {
    return (
      <CardCategoryBg key={item.id} containerStyle={styles.businessCategoryContainer} data={item} />
    );
  });
  const renderListCategory = () => {
    const tmpArr = divisionArray(businessCategoriesProcessed, maxItemInRow);
    return tmpArr.map(rowItem => {
      let tmp = [...rowItem];
      if (rowItem.length < maxItemInRow) {
        for (let i = 0; i < maxItemInRow - rowItem.length; i++) {
          tmp.push({});
        }
      }
      const list = tmp.map(item => {
        return (
          <CardCategoryBg
            key={item.id}
            containerStyle={styles.businessCategoryContainer}
            data={item}
          />
        );
      });
      return <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>{list}</View>;
    });
  };
  return (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>{renderListCategory()}</View>
      </ScrollView>
    </View>
  );
};

export default memo(CategoryScreen);
