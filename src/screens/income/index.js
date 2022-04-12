import { TabsHorizontal } from 'components/';
import React, { memo, useCallback, useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import styles from './styles';
import { tabIncomeScreen } from 'constants/data_constants';
import { useNavigation } from '@react-navigation/core';
import Overview from './components/Overview';
import WalletHistory from './components/WalletHistory';
import WithdrawRequest from './components/WithdrawRequest';
import IncomeOverView from './components/IncomeOverView';
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
        setContent(<WalletHistory />);
        break;
      case 2:
        setContent(<WithdrawRequest />);
        break;
      default:
        setContent(<Overview />);
        break;
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.incomeOverView}>
        <IncomeOverView />
      </View>
      <View style={styles.tabs}>
        <TabsHorizontal data={tabIncomeScreen} onPress={onChangeTab} />
      </View>
      <View style={styles.contentWrapper}>{content}</View>
    </View>
  );
};

export default memo(Income);
