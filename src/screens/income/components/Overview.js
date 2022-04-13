import React, { memo, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletHandle } from 'actions/wallet';
import HeaderTitleScreen from 'components/HeaderTitleScreen';
import SCREENS_NAME from 'constants/screens';
import { useNavigation } from '@react-navigation/core';

const Overview = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { wallets } = useSelector(state => state.wallets);
  useEffect(() => {
    dispatch(getWalletHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const onRequestWithDraw = useCallback(() => {
    navigation.navigate(SCREENS_NAME.WITHDRAW_REQUEST, { data: wallets });
  }, [navigation, wallets]);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderTitleScreen title={'Thu nhập'} showRightButton onPress={onRequestWithDraw} />
      )
    });
  }, [navigation, onRequestWithDraw]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === wallets?.length - 1;
    return (
      <CardWallet key={item.id || index} from="overview" data={item} isLastItem={isLastItem} />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={wallets}
        renderItem={renderItem}
        contentContainerStyle={styles.flex1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flex1: {
    flex: 1
  }
});

export default memo(Overview);
