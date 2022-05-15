import React, { memo, useEffect, useCallback, useState, useMemo } from 'react';
import { FlatList, View, StyleSheet, Keyboard, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchInput } from 'components/';
import { CardJob } from 'components/';
import { getListAllJobHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import SCREEN_NAME from 'constants/screens';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { cleanFilterJobByProvince } from 'actions/system';
import { find } from 'assets/images';

let ev;
const size = 10;

const ListAllJob = props => {
  const navigation = useNavigation();
  const { listJob, onPressItem, onRefresh, refreshing, page, onEndReached, onEndReachedThreshold } =
    props;
  const dispatch = useDispatch();
  const { listAllJob, loading, metaData } = useSelector(state => state.listJob);
  const { filterJobByProvince } = useSelector(state => state.system);

  const list = useMemo(() => {
    const result = [];
    if (listJob) {
      return listJob.data.data;
    }
    for (const k in listAllJob) {
      result.push(listAllJob[k]);
    }
    return result;
  }, [listAllJob, listJob]);

  useEffect(() => {
    dispatch(getListAllJobHandle({ page, size }));
  }, [dispatch]);

  // useEffect(() => {
  //   if (isSearchText) {
  //     if (searchText !== '') {
  //       ev = setTimeout(() => {
  //         dispatch(getListAllJobHandle({ key: searchText, search: true }));
  //       }, 300);
  //     } else {
  //       dispatch(getListAllJobHandle({ page, size }));
  //     }
  //   }
  //   return () => {
  //     if (ev) {
  //       clearTimeout(ev);
  //       ev = undefined;
  //     }
  //   };
  // }, [dispatch, isSearchText, page, searchText]);

  // useEffect(() => {
  //   if (!loading && isRefreshing) {
  //     setIsRefreshing(false);
  //   }
  // }, [isRefreshing, loading]);

  // useEffect(() => {
  //   if (page > 0 && list?.length <= metaData?.total) {
  //     if (searchText && searchText !== '') {
  //       dispatch(getListAllJobHandle({ key: searchText, isLoadMore: true }));
  //     } else {
  //       dispatch(getListAllJobHandle({ page, size, isLoadMore: true }));
  //     }
  //   }
  // }, [dispatch, page]);

  // useEffect(() => {
  //   if (!searchText || searchText === '') {
  //     Keyboard.dismiss();
  //   }
  // }, [searchText]);

  // const handleSetIsSearchText = useCallback(() => {
  //   setIsSearchText(true);
  // }, []);

  // const onClickCardJob = useCallback(
  //   data => {
  //     navigation.navigate(SCREEN_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
  //   },
  //   [navigation]
  // );

  const onSearchText = useCallback(v => {
    // if (filterJobByProvince) {
    //   dispatch(cleanFilterJobByProvince());
    //   setPage(0);
    // }
    // handleSetIsSearchText(true);
    // setSearchText(v);
  }, []);

  const renderJobs = ({ item, index }) => {
    const isLastItem = index === list?.length - 1;
    return <CardJob key={item?.id} data={item} onPress={onPressItem} isLastItem={isLastItem} />;
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Không tìm thấy công việc</Text>
      </View>
    );
  };

  // const loadMore = () => {
  //   setPage(page + 1);
  // };
  return (
    <>
      <View style={styles.searchInput} />
      <FlatList
        keyExtractor={(item, index) => `${item?.id || index}${index}`}
        renderItem={renderJobs}
        data={list || []}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        refreshing={refreshing}
        onRefresh={() => {
          onRefresh?.();
        }}
        ListEmptyComponent={renderListEmptyComponent()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    paddingHorizontal: SPACING.XXNormal,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    paddingVertical: SPACING.Normal
  },
  flatListContainer: {},
  imageFindJob: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%'
  }
});

export default memo(ListAllJob);
