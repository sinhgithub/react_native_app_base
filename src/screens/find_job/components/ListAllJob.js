import React, { memo, useEffect, useCallback, useState, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchInput } from 'components/';
import { CardJob, CardJobSkeleton } from 'components/';
import { getListAllJobHandle } from 'actions/getListJob';
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
  const { listAllJob, loading, metaData } = useSelector(state => state.listJob);
  const [page, setPage] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const list = useMemo(() => {
    const result = [];
    for (const k in listAllJob) {
      result.push(listAllJob[k]);
    }
    return result;
  }, [listAllJob]);

  useEffect(() => {
    dispatch(getListAllJobHandle({ page, size }));
  }, [dispatch]);

  useEffect(() => {
    if (isSearchText) {
      if (searchText !== '') {
        ev = setTimeout(() => {
          dispatch(getListAllJobHandle({ key: searchText, page, size }));
        }, 300);
      } else {
        dispatch(getListAllJobHandle({ page, size }));
      }
    }
    return () => {
      if (ev) {
        clearTimeout(ev);
        ev = undefined;
      }
    };
  }, [dispatch, isSearchText, searchText]);

  useEffect(() => {
    if (!loading && isRefreshing) {
      setIsRefreshing(false);
    }
  }, [isRefreshing, loading]);

  useEffect(() => {
    if (page > 0 && list?.length <= metaData?.total) {
      dispatch(getListAllJobHandle({ page, size, isLoadMore: true }));
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
    const isLastItem = index === list?.length - 1;
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
    setPage(page + 1);
  };
  const onRefresh = () => {
    setIsRefreshing(true);
    dispatch(getListAllJobHandle({ page: 0, size }));
  };

  return (
    <>
      <View style={styles.searchInput}>
        <SearchInput
          onChange={onSearchText}
          value={searchText}
          hideSearchIcon
          onFilter={onPressFilter}
        />
      </View>
      {loading ? (
        renderSkeleton()
      ) : (
        <FlatList
          keyExtractor={() => uuidv4()}
          renderItem={renderJobs}
          data={list || []}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      )}
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
  flatListContainer: {
    // flex: 1
  }
});

export default memo(ListAllJob);
