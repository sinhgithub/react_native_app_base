import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletWithDrawHandle } from 'actions/wallet';
import { useNavigation } from '@react-navigation/core';
import HeaderTitleScreen from 'components/HeaderTitleScreen';
import SCREENS_NAME from 'constants/screens';

const WithdrawRequest = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loadingWalletWithDraw, walletWithDraw } = useSelector(state => state.wallets);

  useEffect(() => {
    dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const onRequestWithDraw = useCallback(() => {
    navigation.navigate(SCREENS_NAME.WITHDRAW_REQUEST, { data: walletWithDraw });
  }, [navigation, walletWithDraw]);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderTitleScreen title={'Thu nhập'} showRightButton onPress={onRequestWithDraw} />
      )
    });
  }, [navigation, onRequestWithDraw]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === walletWithDraw?.data?.length - 1;
    return (
      <CardWallet from="withDraw" isLastItem={isLastItem} data={item} key={item.id || index} />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={walletWithDraw?.data || []}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(WithdrawRequest);
