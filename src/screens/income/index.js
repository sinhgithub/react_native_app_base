import { TabsHorizontal } from 'components/';
import React, { memo, useCallback, useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import styles from './styles';
import { tabIncomeScreen } from 'constants/data_constants';
import { useNavigation } from '@react-navigation/core';
import Overview from './components/Overview';

const Income = props => {
  const navigation = useNavigation();

  const [content, setContent] = useState(<Overview />);

  const onChangeTab = useCallback(index => {
    // setSearchText('');
    Keyboard.dismiss();
    switch (index.index) {
      case 0:
        setContent(<Overview />);
        break;
      case 1:
        // setContent(<ListSavedJob />);
        break;
      case 2:
        // setContent(<ListJobApply />);
        break;
      default:
        setContent(<Overview />);
        break;
    }
    // dispatch(filterJobByList(index));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TabsHorizontal data={tabIncomeScreen} onPress={onChangeTab} />
      </View>
      <View style={styles.contentWrapper}>{content}</View>
    </View>
  );
};

export default memo(Income);
