import React, { memo, useEffect, useMemo } from 'react';
import { FlatList, View, StyleSheet, Image, Text } from 'react-native';
import { CardJob } from 'components/';
import { getListAllJobHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { find } from 'assets/images';

const ListAllJob = props => {
  const {
    listJob,
    onPressItem,
    size,
    onRefresh,
    refreshing,
    page,
    onEndReached,
    onEndReachedThreshold
  } = props;
  const dispatch = useDispatch();
  const { listAllJob } = useSelector(state => state.listJob);
  const { filterJobByCategory, filterJobByProvince } = useSelector(state => state.system);
  const list = useMemo(() => {
    const result = [];
    if (listJob) {
      return listJob.data.data;
    }
    for (const k in listAllJob) {
      result.push(listAllJob[k]);
    }
    return result?.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [listAllJob, listJob]);

  useEffect(() => {
    if (!filterJobByCategory && !filterJobByProvince) {
      dispatch(getListAllJobHandle({ page, size }));
    }
  }, [dispatch, filterJobByProvince, filterJobByCategory]);

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
