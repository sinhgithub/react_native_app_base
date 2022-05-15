import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { TabsHorizontal } from 'components/';
import { inputType, tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import ListAllJob from './components/ListAllJob';
import ListSavedJob from './components/ListSavedJob';
import ListJobApply from './components/ListJobApply';
import { useDispatch, useSelector } from 'react-redux';
import { cleanFilterJobByProvince, filterJobHandle } from 'actions/system';
import CustomInput from 'components/FormCustom/conponents/CustomInput';
import SCREENS_NAME from 'constants/screens';
import { getListProvinceHandle } from 'actions/master_data';
import { removeAccents } from 'helpers/removeAccents';
import { experienceLevelType } from 'constants/data_constants';
import { getListAllJobHandle, getListApplyJobHandle } from 'actions/getListJob';
const size = 10;

const FindJobScreen = ({ navigation, route }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);
  const { provinces } = useSelector(state => state.masterData);
  const [page, setPage] = useState(1);
  const { listAllJob, loading: loadingAllJob, metaData } = useSelector(state => state.listJob);
  const [listJob, setListJob] = useState(null);
  const { filterJobByProvince } = useSelector(state => state.system);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    resetSearch();
    switch (tabIndex) {
      case 0:
        dispatch(
          getListAllJobHandle({
            page: 1,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
      case 1:
        dispatch(
          getListAllJobHandle({
            page: 1,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
      case 2:
        dispatch(
          getListApplyJobHandle({
            page: 1,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
      default:
        dispatch(
          getListAllJobHandle({
            page: 1,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
    }
  }, [dispatch, resetSearch, tabIndex]);
  const onEndReachedThreshold = 0.2;
  const onEndReached = useCallback(() => {
    resetSearch();
    switch (tabIndex) {
      case 0:
        if (metaData?.totalPage > page) {
          setPage(page + 1);
        }
        break;
    }
  }, [metaData?.totalPage, page, resetSearch, tabIndex]);

  useEffect(() => {
    if (!loadingAllJob && !refreshing) {
      switch (tabIndex) {
        case 0:
          if (metaData?.total > listAllJobProcessed?.length) {
            dispatch(
              getListAllJobHandle({
                page,
                size
              })
            );
          }
          break;
        case 1:
          dispatch(
            getListAllJobHandle({
              page: 1,
              size,
              success: () => {
                setRefreshing(false);
              }
            })
          );
          break;
        case 2:
          dispatch(
            getListAllJobHandle({
              page: 1,
              size,
              success: () => {
                setRefreshing(false);
              }
            })
          );
          break;
        default:
          dispatch(
            getListAllJobHandle({
              page,
              size
            })
          );
          break;
      }
    }
  }, [page]);

  const onPressItem = useCallback(
    item => {
      resetSearch();
      navigation.navigate(SCREENS_NAME.DETAIL_JOB_SCREEN, { cardJob: item });
    },
    [navigation, resetSearch]
  );

  const content = useMemo(() => {
    switch (tabIndex) {
      case 0:
        return (
          <ListAllJob
            onRefresh={onRefresh}
            navigation={navigation}
            listJob={listJob}
            onPressItem={onPressItem}
            refreshing={refreshing}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            page={page}
          />
        );
      case 1:
        return (
          <ListSavedJob
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onPressItem={onPressItem}
            page={page}
            navigation={navigation}
            listJob={listJob}
          />
        );
      case 2:
        return (
          <ListJobApply
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            refreshing={refreshing}
            onRefresh={onRefresh}
            onPressItem={onPressItem}
            page={page}
            listJob={listJob}
          />
        );
      default:
        return (
          <ListAllJob
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            refreshing={refreshing}
            navigation={navigation}
            onPressItem={onPressItem}
            page={page}
            listJob={listJob}
          />
        );
    }
  }, [tabIndex, onRefresh, navigation, listJob, onPressItem, refreshing, onEndReached, page]);

  useEffect(() => {
    dispatch(getListProvinceHandle({}));
  }, [dispatch]);

  const resetSearch = useCallback(() => {
    if (listJob) {
      setListJob(null);
    }
    if (searchText && searchText !== '') {
      setSearchText('');
    }
    if (filterJobByProvince) {
      dispatch(cleanFilterJobByProvince({}));
    }
  }, [dispatch, filterJobByProvince, listJob, searchText]);

  const handleChangeTab = index => {
    setTabIndex(index.index);
  };
  const onChangeTab = useCallback(
    index => {
      setPage(1);
      resetSearch();
      handleChangeTab(index);
    },
    [resetSearch]
  );

  const onPressFilter = useCallback(() => {
    navigation.navigate(SCREENS_NAME.FILTER_JOB);
    setListJob(null);
    setSearchText('');
    dispatch(cleanFilterJobByProvince({}));
  }, [dispatch, navigation]);

  const onChangeText = useCallback(
    value => {
      if (filterJobByProvince) {
        dispatch(cleanFilterJobByProvince({}));
      }
      setSearchText(value);
    },
    [dispatch, filterJobByProvince]
  );

  const provincesProcessed = useMemo(() => {
    const result = [];
    if (provinces) {
      for (const k in provinces) {
        result.push(provinces[k]);
      }
    }
    return result;
  }, [provinces]);

  const listAllJobProcessed = useMemo(() => {
    const result = [];
    if (listAllJob) {
      for (const k in listAllJob) {
        result.push(listAllJob[k]);
      }
    }
    return result;
  }, [listAllJob]);

  useEffect(() => {
    let ev;
    if (searchText && searchText !== '' && provincesProcessed) {
      ev = setTimeout(() => {
        if (tabIndex !== 0) {
          setTabIndex(0);
        }
        let province = provincesProcessed.find(item => {
          return removeAccents(item.name)
            .toLowerCase()
            .includes(removeAccents(searchText).toLowerCase());
        });
        let address = listAllJobProcessed.find(item => {
          return removeAccents(`${item.address}, ${item.district.name}`)
            .toLowerCase()
            .includes(removeAccents(searchText).toLowerCase());
        });
        const type = listAllJobProcessed.find(item => {
          return removeAccents(item.type)
            .toLowerCase()
            .includes(removeAccents(searchText).toLowerCase());
        });
        const wages = listAllJobProcessed.find(item => {
          return removeAccents(`${item.wageFrom}-${item.wageTo}`)
            .toLowerCase()
            .includes(removeAccents(searchText).toLowerCase());
        });
        const experience_level = listAllJobProcessed.find(item => {
          return experienceLevelType.find(level => {
            if (
              removeAccents(level.label)
                .toLowerCase()
                .includes(removeAccents(searchText).toLowerCase())
            ) {
              return level;
            }
          });
        });
        const params = province
          ? { province_id: province?.id }
          : type
          ? { type }
          : wages
          ? { wage_from: wages.wageFrom, wage_to: wages.wageTo }
          : experience_level
          ? {
              experience_level: experience_level.id
            }
          : address
          ? { address: address.id }
          : { key: searchText };

        dispatch(filterJobHandle({ ...params, size, page, success: setListJob }));
      }, 200);
    }
    return () => {
      if (listJob) {
        setListJob(null);
      }
      if (ev) {
        clearTimeout(ev);
      }
    };
  }, [dispatch, provincesProcessed, searchText, listAllJobProcessed]);

  useEffect(() => {
    if (filterJobByProvince) {
      dispatch(
        filterJobHandle({
          province_id: filterJobByProvince.data.id,
          size,
          page,
          success: setListJob
        })
      );
    }
  }, [dispatch, filterJobByProvince, page]);

  return (
    <View
      style={styles.findJobScreen}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.tabs} onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <TabsHorizontal
          data={tabFindJobScreen}
          tabItemStyle={styles.tabItemStyle}
          onPress={onChangeTab}
          tabActive={tabIndex}
        />
      </View>
      <View style={styles.inputArea}>
        <CustomInput
          handlePressLocation={onPressFilter}
          type={inputType.searchJob}
          placeholder="Nhập tên công ty, vị trí,..."
          onChangeSearch={onChangeText}
          value={searchText}
        />
      </View>
      <View style={{ flex: 1 }}>{content}</View>
    </View>
  );
};

export default memo(FindJobScreen);
