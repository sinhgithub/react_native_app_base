import React, { memo, useCallback, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { TabsHorizontal } from 'components/';
import { tabFindJobScreen } from 'constants/data_constants';
import styles from './styles';
import ListAllJob from './components/ListAllJob';
import ListSavedJob from './components/ListSavedJob';
import ListJobApply from './components/ListJobApply';
import { useDispatch, useSelector } from 'react-redux';
import { cleanFilterJobByProvince } from 'actions/system';

const FindJobScreen = ({ navigation, route }) => {
  const [content, setContent] = useState(<ListAllJob />);
  const dispatch = useDispatch();
  const onChangeTab = useCallback(
    index => {
      dispatch(cleanFilterJobByProvince());
      Keyboard.dismiss();
      switch (index.index) {
        case 0:
          setContent(<ListAllJob navigation={navigation} />);
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
    },
    [navigation]
  );

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
