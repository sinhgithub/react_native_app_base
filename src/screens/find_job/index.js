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
import ListAllJob from './components/ListAllJob';
import ListSavedJob from './components/ListSavedJob';
import ListJobApply from './components/ListJobApply';

const numberSkeleton = 4;
let ev;

const FindJobScreen = props => {
  const navigation = useNavigation();

  const [content, setContent] = useState(<ListAllJob />);

  const onChangeTab = useCallback(index => {
    // setSearchText('');
    Keyboard.dismiss();
    switch (index.index) {
      case 0:
        setContent(<ListAllJob />);
        break;
      case 1:
        setContent(<ListSavedJob />);
        break;
      case 2:
        setContent(<ListJobApply />);
        break;
      default:
        setContent(<ListAllJob />);
        break;
    }
    // dispatch(filterJobByList(index));
  }, []);

  // useEffect(() => {
  //   if (isSearchText) {
  //     if (searchText !== '') {
  //       ev = setTimeout(() => {
  //         dispatch(getListAllJobHandle(searchText));
  //       }, 300);
  //     } else {
  //       dispatch(getListAllJobHandle());
  //     }
  //   }
  //   return () => {
  //     if (ev) {
  //       clearTimeout(ev);
  //       ev = undefined;
  //     }
  //   };
  // }, [dispatch, isSearchText, searchText]);

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
        />
      </View>
      <View style={{ flex: 1 }}>{content}</View>
    </View>
  );
};

export default memo(FindJobScreen);
