import React, { memo, useEffect, useCallback, useMemo } from 'react';
import { FlatList, View, StyleSheet, Image, Text } from 'react-native';
import { CardJob, CardJobSkeleton } from 'components/';
import { getListFollowJobHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { find } from 'assets/images';
const numberSkeleton = 4;
const ListAllJob = props => {
  const dispatch = useDispatch();

  const { onPressItem, size, onRefresh, refreshing, page, onEndReached, onEndReachedThreshold } =
    props;

  const { listFollowJob, loadingFollowJob } = useSelector(state => state.listJob);

  const list = useMemo(() => {
    const result = [];
    for (const k in listFollowJob) {
      result.push(listFollowJob[k]);
    }
    return result;
  }, [listFollowJob]);

  useEffect(() => {
    dispatch(getListFollowJobHandle({ page, size }));
  }, [dispatch]);

  const renderJobs = ({ item, index }) => {
    const isLastItem = list?.length - 1 === index;
    return <CardJob key={item?.id} data={item} onPress={onPressItem} isLastItem={isLastItem} />;
  };

  const renderSkeleton = useCallback(() => {
    return Array(numberSkeleton)
      .fill('')
      .map((item, index) => {
        return <CardJobSkeleton key={item?.id || index} />;
      });
  }, []);

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Không tìm thấy công việc</Text>
      </View>
    );
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.searchInput} />
      {loadingFollowJob ? (
        renderSkeleton()
      ) : (
        <FlatList
          style={styles.flex1}
          keyExtractor={(item, index) => `${item?.id || index}${index}`}
          renderItem={renderJobs}
          data={list?.length > 0 ? list : []}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListEmptyComponent={renderListEmptyComponent}
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
