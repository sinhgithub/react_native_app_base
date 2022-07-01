import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import { getListJobHomePageHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CardCategoryBg from 'components/CardCategoryBg';
import { divisionArray } from 'helpers/divisionArray';
import { setFilterJobByCategory } from 'actions/system';
import SCREENS_NAME from 'constants/screens';
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

  const onPressBusinessCategory = useCallback(
    data => {
      dispatch(setFilterJobByCategory(data));
      navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN);
    },
    [dispatch, navigation]
  );

  const renderListCategory = () => {
    const tmpArr = divisionArray(businessCategoriesProcessed, maxItemInRow);
    return tmpArr.map((rowItem, index) => {
      let tmp = [...rowItem];
      if (rowItem.length < maxItemInRow) {
        for (let i = 0; i < maxItemInRow - rowItem.length; i++) {
          tmp.push({});
        }
      }
      const list = tmp.map((item, idx) => {
        return (
          <CardCategoryBg
            key={item.id || idx}
            containerStyle={styles.businessCategoryContainer}
            data={item}
            onPress={onPressBusinessCategory}
          />
        );
      });
      return (
        <View
          key={rowItem?.id || index}
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {list}
        </View>
      );
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
