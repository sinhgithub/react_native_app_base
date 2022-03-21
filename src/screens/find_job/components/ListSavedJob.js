import React, { memo, useEffect, useCallback, useState, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchInput } from 'components/';
import { CardJob, CardJobSkeleton } from 'components/';
import { getListFollowJobHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import SCREEN_NAME from 'constants/screens';
import { CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { v4 as uuidv4 } from 'uuid';

const numberSkeleton = 4;
let ev;
const size = 10;

const ListAllJob = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState(null);
  const [isSearchText, setIsSearchText] = useState(false);
  const { listFollowJob, loadingFollowJob, metaDataFollowJob } = useSelector(
    state => state.listJob
  );
  const [page, setPage] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const list = useMemo(() => {
    const result = [];
    for (const k in listFollowJob) {
      result.push(listFollowJob[k]);
    }
    return result;
  }, [listFollowJob]);

  const [listData, setListData] = useState(list);

  useEffect(() => {
    dispatch(getListFollowJobHandle({ page, size }));
  }, [dispatch]);

  useEffect(() => {
    if (isSearchText) {
      if (searchText !== '') {
        const newList = listData.filter(item => item.title.includes(searchText));
        ev = setTimeout(() => {
          setListData(newList);
        }, 300);
      } else {
        setListData(list);
      }
    }
    return () => {
      if (ev) {
        clearTimeout(ev);
        ev = undefined;
      }
    };
  }, [dispatch, isSearchText, list, listData, searchText]);

  useEffect(() => {
    if (!loadingFollowJob && isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isRefreshing, loadingFollowJob]);

  useEffect(() => {
    if (page > 1 && list?.length <= metaDataFollowJob?.total) {
      dispatch(getListFollowJobHandle({ page, size, isLoadMore: true }));
    }
  }, [dispatch, page]);

  const handleSetIsSearchText = useCallback(() => {
    setIsSearchText(true);
  }, []);

  const onClickCardJob = useCallback(
    data => {
      navigation.navigate(SCREEN_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
    },
    [navigation]
  );

  const onSearchText = useCallback(
    v => {
      handleSetIsSearchText(true);
      setSearchText(v);
    },
    [handleSetIsSearchText]
  );

  const renderJobs = ({ item, index }) => {
    const isLastItem = listData?.length
      ? listData?.length - 1 === index
      : list?.length - 1 === index;
    return <CardJob key={item?.id} data={item} onPress={onClickCardJob} isLastItem={isLastItem} />;
  };

  const renderSkeleton = useCallback(() => {
    return Array(numberSkeleton)
      .fill('')
      .map((item, index) => {
        return <CardJobSkeleton key={index} />;
      });
  }, []);

  const onPressFilter = useCallback(() => {
    navigation.navigate(SCREEN_NAME.FILTER_JOB);
  }, [navigation]);

  const loadMore = () => {
    console.log('load morre');
    setPage(page + 1);
  };
  const onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getListFollowJobHandle({ page: 0, size }));
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.searchInput}>
        <SearchInput
          onChange={onSearchText}
          value={searchText}
          hideSearchIcon
          onFilter={onPressFilter}
        />
      </View>
      {loadingFollowJob ? (
        renderSkeleton()
      ) : (
        <FlatList
          style={styles.flex1}
          keyExtractor={() => uuidv4()}
          renderItem={renderJobs}
          data={listData?.length > 0 ? listData : list || []}
          onEndReached={loadMore}
          onEndReachedThreshold={-0.3}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  searchInput: {
    paddingHorizontal: SPACING.XXNormal,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    paddingVertical: SPACING.Normal
  },
  flatListContainer: {
    // flex: 1
  }
});

export default memo(ListAllJob);
