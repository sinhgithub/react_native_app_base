import React, { memo, useEffect, useCallback, useState } from 'react';
import { FlatList, Keyboard, View } from 'react-native';
import { TabsHorizontal, Icon } from 'components/';
import { tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SearchInput } from 'components/';
import { CardJob, CardJobSkeleton } from 'components/';
import { getListAllJobHandle } from 'actions/getListJob';
import { filterJobByList } from 'actions/filter';
import { useDispatch, useSelector } from 'react-redux';
import SCREEN_NAME from 'constants/screens';

const numberSkeleton = 4;
let ev;

const FindJobScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { listAllJobFiltered, listAllJob, loading } = useSelector(state => state.listJob);
  const [searchText, setSearchText] = useState(null);
  const [isSearchText, setIsSearchText] = useState(false);

  useEffect(() => {
    dispatch(getListAllJobHandle());
  }, [dispatch]);

  const onClickCardJob = useCallback(
    data => {
      navigation.navigate(SCREEN_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
    },
    [navigation]
  );

  const onChangeTab = useCallback(
    index => {
      setSearchText('');
      Keyboard.dismiss();
      dispatch(filterJobByList(index));
    },
    [dispatch]
  );

  const handleSetIsSearchText = useCallback(() => {
    setIsSearchText(true);
  }, []);

  const onSearchText = useCallback(
    v => {
      handleSetIsSearchText(true);
      setSearchText(v);
    },
    [handleSetIsSearchText]
  );

  useEffect(() => {
    if (isSearchText) {
      if (searchText !== '') {
        ev = setTimeout(() => {
          dispatch(getListAllJobHandle(searchText));
        }, 300);
      } else {
        dispatch(getListAllJobHandle());
      }
    }
    return () => {
      if (ev) {
        clearTimeout(ev);
        ev = undefined;
      }
    };
  }, [dispatch, isSearchText, searchText]);

  const renderJobs = ({ item }) => {
    return <CardJob key={item?.id} data={item} onPress={onClickCardJob} />;
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

  return (
    <View style={styles.findJobScreen}>
      <View style={styles.tabs} onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <TabsHorizontal
          data={tabFindJobScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={onChangeTab}
        />
      </View>
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
        <View>
          <FlatList
            keyExtractor={(item, index) => item?.id || index}
            renderItem={renderJobs}
            data={listAllJobFiltered || listAllJob?.data || []}
          />
        </View>
      )}
    </View>
  );
};

export default memo(FindJobScreen);
