import React, { memo, useCallback, useState, useMemo, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { CardJob, CardJobSkeleton } from 'components/';
import { useDispatch, useSelector } from 'react-redux';
import { empty_quote } from 'assets/images';
import { BACKGROUND_COLOR } from 'constants/colors';
import { Button } from 'components/';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';
import { getListAppliedJobHandle } from 'actions/getListJob';
import { find } from 'assets/images';

const Working = props => {
  const dispatch = useDispatch();
  const { listAppliedJob, loadingAppliedJob, metaDataAppliedJob } = useSelector(
    state => state?.listJob
  );
  const list = useMemo(() => {
    const result = [];
    for (const k in listAppliedJob) {
      result.push(listAppliedJob[k]);
    }
    return result;
  }, [listAppliedJob]);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      getListAppliedJobHandle({
        handleErr: v => {
          //do no thing
        }
      })
    );
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    const isLastItem = list?.length - 1 === index;
    return <CardJob onPress={() => {}} data={item} hideAllFlag isLastItem={isLastItem} />;
  };

  const onClickFindJobNow = useCallback(() => {
    navigation.navigate(SCREEN_NAME.FIND_JOB_SCREEN);
  }, [navigation]);

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Bạn chưa có việc làm</Text>
        <Button title="Tìm việc ngay" type="basic" submitMethod={onClickFindJobNow} />
      </View>
    );
  };

  const listSkeleton = Array(5)
    .fill('')
    .map((v, i) => {
      return <CardJobSkeleton key={i} />;
    }, []);

  return (
    <View style={styles.container}>
      {loadingAppliedJob ? (
        listSkeleton
      ) : (
        <FlatList
          style={styles.flex1}
          keyExtractor={(item, index) => `${item?.id || index}`}
          data={list || []}
          renderItem={renderItem}
          ListEmptyComponent={renderListEmptyComponent()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1
  },
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

export default memo(Working);
