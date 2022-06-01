import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { CardJob } from 'src/components';
import styles from './styles';
import { inputType } from 'constants/data_constants';
import { getListJobHomePageHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';
import { getUserHandle } from 'actions/user';
import { getListNotifyHandle } from 'actions/notification';
import {
  cleanFilterJobByCategory,
  cleanFilterJobByProvince,
  setFilterJobByCategory,
  setFocusInput
} from 'actions/system';
import SCREENS_NAME from 'constants/screens';
import FastImage from 'react-native-fast-image';
import { getConfigSiteHandle } from 'actions/configSite';
import CustomInput from 'components/FormCustom/conponents/CustomInput';
import CardCategoryBg from 'components/CardCategoryBg';
import { getBusinessCategoryHandle } from 'actions/master_data';
import { SPACING } from 'constants/size';
import { getEmployerHandle } from 'actions/employer';
import CardEmployer from 'components/CardEmployer';
import { getImageFromHost } from 'configs/appConfigs';
const size = 10;

const seeAllType = {
  byCategory: 'byCategory',
  byHomePageJob: 'byHomePageJob',
  byEmployer: 'byEmployer'
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { listJobHomePage } = useSelector(state => state.listJob);
  const { configSite } = useSelector(state => state.configSite);
  const { businessCategories } = useSelector(state => state.masterData);
  const { employers } = useSelector(state => state.employers);
  const { isFocusInput, filterJobByCategory, filterJobByProvince } = useSelector(
    state => state.system
  );
  const businessCategoriesProcessed = useMemo(() => {
    return Object.values(businessCategories || {});
  }, [businessCategories]);

  const employersProcessed = useMemo(() => {
    return Object.values(employers?.data || {});
  }, [employers]);
  useEffect(() => {
    dispatch(getListJobHomePageHandle());
    dispatch(
      getEmployerHandle({
        params: { size, page: 0 },
        success: () => {},
        failure: () => {},
        handleErr: () => {}
      })
    );
    dispatch(getUserHandle({}));
    dispatch(getConfigSiteHandle({}));
    dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    dispatch(
      getBusinessCategoryHandle({
        success: () => {},
        failure: () => {},
        handleErr: () => {},
        params: {
          collection: 'HOME_PAGE',
          size: 1
        }
      })
    );
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getUserHandle({}));
      dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
      if (isFocusInput) {
        dispatch(setFocusInput(false));
      }
      if (filterJobByCategory) {
        dispatch(cleanFilterJobByCategory({}));
      }
      if (filterJobByProvince) {
        dispatch(cleanFilterJobByProvince({}));
      }
    });
    return () => {
      focusListener();
    };
  }, [dispatch, navigation]);

  const onClickCardJob = useCallback(
    data => {
      navigation.navigate(SCREEN_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
    },
    [navigation]
  );

  const listJobHomePageSorted = useMemo(() => {
    return listJobHomePage.sort(
      (a, b) => new Date(a.updatedAt).getMilliseconds() - new Date(b.updatedAt).getMilliseconds()
    );
  }, [listJobHomePage]);

  const listJob = listJobHomePageSorted?.map((job, index) => {
    const isLastItem = index === listJobHomePageSorted?.length - 1;
    return <CardJob onPress={onClickCardJob} data={job} key={job.id} isLastItem={isLastItem} />;
  });

  const onPressBusinessCategory = useCallback(
    data => {
      dispatch(setFilterJobByCategory(data));
      navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN);
    },
    [dispatch, navigation]
  );

  const renderBusinessCategory = ({ item, index }) => {
    return (
      <CardCategoryBg
        key={item?.id || index}
        containerStyle={styles.businessCategoryContainer}
        data={item}
        onPress={onPressBusinessCategory}
      />
    );
  };

  const renderEmployerCard = ({ item, index }) => {
    return (
      <CardEmployer
        key={item?.id || index}
        data={item}
        containerStyle={styles.employersContainer}
        onPress={onPressEmployerCard}
      />
    );
  };

  const onPressEmployerCard = useCallback(
    employer => {
      navigation.navigate(SCREENS_NAME.EMPLOYER_DETAIL_SCREEN, { id: employer.id });
    },
    [navigation]
  );

  const onClickSeeAll = useCallback(
    type => {
      switch (type) {
        case seeAllType.byCategory:
          navigation.navigate(SCREENS_NAME.CATEGORY_SCREEN, {});
          break;
        case seeAllType.byHomePageJob:
          navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN, {});
          break;
        case seeAllType.byEmployer:
          navigation.navigate(SCREENS_NAME.EMPLOYER_LIST_SCREEN, {});
          break;
        default:
          break;
      }
    },
    [navigation]
  );

  const handleFocusSearchInput = useCallback(() => {
    dispatch(setFocusInput(true));
    navigation.navigate(SCREENS_NAME.FIND_JOB_SCREEN);
  }, [navigation]);

  const handlePressLocation = useCallback(() => {
    navigation.navigate(SCREENS_NAME.FILTER_JOB, {});
  }, [navigation]);

  return (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.bannerWrapper}>
          <FastImage
            source={{
              uri: getImageFromHost('upload/images/1c3f596b-a284-42bc-8e9b-b24a60c9f030.png')
            }}
            style={styles.banner}
            resizeMode="cover"
          />
          {configSite && (
            <View style={styles.slogan1}>
              <Text style={styles.slogan}>{configSite.slogan1}</Text>
              <Text style={styles.slogan}>{configSite.slogan2}</Text>
            </View>
          )}
          {configSite && (
            <View style={styles.slogan2}>
              <Text style={styles.slogan}>{configSite.slogan3}</Text>
            </View>
          )}
        </View>
        <View style={styles.searchWrapper}>
          <CustomInput
            type={inputType.searchJob}
            placeholder="Nhập tên công ty, vị trí,..."
            handleFocusCustom={handleFocusSearchInput}
            handlePressLocation={handlePressLocation}
          />
        </View>
        <View style={styles.category}>
          <View style={[styles.rowBetween, { paddingHorizontal: SPACING.XXNormal }]}>
            <Text style={styles.sectionName}>Theo ngành nghề</Text>
            <TouchableOpacity onPress={() => onClickSeeAll(seeAllType.byCategory)}>
              <Text style={styles.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bushinessCategoriesWrapper}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={businessCategoriesProcessed || []}
              keyExtractor={(item, index) => item?.id || index}
              renderItem={renderBusinessCategory}
            />
          </View>
        </View>
        <View style={styles.category}>
          <View style={[styles.rowBetween, { paddingHorizontal: SPACING.XXNormal }]}>
            <Text style={styles.sectionName}>Việc làm hấp dẫn</Text>
            <TouchableOpacity onPress={() => onClickSeeAll(seeAllType.byHomePageJob)}>
              <Text style={styles.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listJobWrapper}>{listJob}</View>
        </View>
        <View style={styles.category}>
          <View style={[styles.rowBetween, { paddingHorizontal: SPACING.XXNormal }]}>
            <Text style={styles.sectionName}>Nhà tuyển dụng hàng đầu</Text>
            <TouchableOpacity onPress={() => onClickSeeAll(seeAllType.byEmployer)}>
              <Text style={styles.seeAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bushinessCategoriesWrapper}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={employersProcessed || []}
              keyExtractor={(item, index) => item?.id || index}
              renderItem={renderEmployerCard}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
