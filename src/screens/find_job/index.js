import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { TabsHorizontal } from 'components/';
import { inputType, tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import ListAllJob from './components/ListAllJob';
import ListSavedJob from './components/ListSavedJob';
import ListJobApply from './components/ListJobApply';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanFilterJobByCategory,
  cleanFilterJobByProvince,
  filterJobHandle,
  setFocusInput
} from 'actions/system';
import CustomInput from 'components/FormCustom/conponents/CustomInput';
import SCREENS_NAME from 'constants/screens';
import { getListProvinceHandle } from 'actions/master_data';
import { removeAccents } from 'helpers/removeAccents';
import { experienceLevelType } from 'constants/data_constants';
import {
  getListAllJobHandle,
  getListApplyJobHandle,
  getListFollowJobHandle
} from 'actions/getListJob';
const size = 10;
const onEndReachedThreshold = 0.2;

const FindJobScreen = ({ navigation, route }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);
  const { provinces } = useSelector(state => state.masterData);
  const { isFocusInput, filterJobByCategory, filterJobByProvince } = useSelector(
    state => state.system
  );
  const [refInput, setRefInput] = useState(null);
  const [page, setPage] = useState(0);
  const {
    listAllJob,
    loading: loadingAllJob,
    metaData,
    listFollowJob,
    metaDataFollowJob,
    loadingFollowJob,
    listApplyJob,
    loadingApplyJob,
    metaDataApplyJob
  } = useSelector(state => state.listJob);

  const [listJob, setListJob] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    resetSearch();
    switch (tabIndex) {
      case 0:
        dispatch(
          getListAllJobHandle({
            page: 0,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
      case 1:
        dispatch(
          getListFollowJobHandle({
            page: 0,
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
            page: 0,
            size,
            success: () => {
              setRefreshing(false);
            }
          })
        );
        break;
      default:
        break;
    }
  }, [dispatch, resetSearch, tabIndex]);

  const onEndReached = useCallback(() => {
    resetSearch();
    switch (tabIndex) {
      case 0:
        if (metaData?.totalPage >= page && !filterJobByProvince && !filterJobByCategory) {
          setPage(page + 1);
        }
        break;
      case 1:
        if (metaDataFollowJob?.totalPage >= page && !filterJobByProvince && !filterJobByCategory) {
          setPage(page + 1);
        }
        break;
      case 2:
        if (metaDataApplyJob?.totalPage >= page && !filterJobByProvince && !filterJobByCategory) {
          setPage(page + 1);
        }
        break;
      default:
        break;
    }
  }, [
    filterJobByCategory,
    filterJobByProvince,
    metaData?.totalPage,
    metaDataApplyJob?.totalPage,
    metaDataFollowJob?.totalPage,
    page,
    resetSearch,
    tabIndex
  ]);

  useEffect(() => {
    if (!loadingAllJob && !refreshing && !loadingFollowJob && !loadingApplyJob) {
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
          if (metaDataFollowJob?.total > Object.keys(listFollowJob)?.length) {
            dispatch(
              getListFollowJobHandle({
                page,
                size,
                success: () => {
                  setRefreshing(false);
                }
              })
            );
          }
          break;
        case 2:
          if (metaDataApplyJob?.total > Object.keys(listApplyJob)?.length) {
            dispatch(
              getListApplyJobHandle({
                page,
                size,
                success: () => {
                  setRefreshing(false);
                }
              })
            );
          }
          break;
        default:
          return;
      }
    }
  }, [page]);

  useEffect(() => {
    if (isFocusInput && refInput) {
      refInput.focus();
    }
  }, [isFocusInput]);

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
            size={size}
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
            size={size}
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
            size={size}
          />
        );
      default:
        return null;
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
    if (page > 0) {
      setPage(0);
    }
    if (isFocusInput) {
      dispatch(setFocusInput(false));
    }
    if (filterJobByCategory) {
      dispatch(cleanFilterJobByCategory({}));
    }
  }, [dispatch, filterJobByCategory, filterJobByProvince, isFocusInput, listJob, page, searchText]);

  const onChangeTab = useCallback(
    index => {
      setPage(0);
      resetSearch();
      setTabIndex(index.index);
    },
    [resetSearch]
  );

  const onPressFilter = useCallback(() => {
    navigation.navigate(SCREENS_NAME.FILTER_JOB);
    setListJob(null);
    setSearchText('');
    resetSearch();
    dispatch(cleanFilterJobByProvince({}));
  }, [dispatch, navigation, resetSearch]);

  const onChangeText = useCallback(
    value => {
      resetSearch();
      setSearchText(value);
    },
    [resetSearch]
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

        dispatch(filterJobHandle({ ...params, size: 9999, page: 0, success: setListJob }));
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
          size: 99999,
          page: 0,
          success: setListJob
        })
      );
    }
    if (filterJobByCategory) {
      dispatch(
        filterJobHandle({
          category_id: filterJobByCategory.id,
          size: 99999,
          page: 0,
          success: setListJob
        })
      );
    }
    return () => {
      if (listJob) {
        setListJob(null);
      }
    };
  }, [dispatch, filterJobByProvince, filterJobByCategory]);

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
          getRef={setRefInput}
        />
      </View>
      <View style={{ flex: 1 }}>{content}</View>
    </View>
  );
};

export default memo(FindJobScreen);
