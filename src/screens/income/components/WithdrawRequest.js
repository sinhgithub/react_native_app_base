import React, { memo, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletWithDrawHandle } from 'actions/wallet';
import { useNavigation } from '@react-navigation/core';

const WithdrawRequest = props => {
  const dispatch = useDispatch();
  const { loadingWalletWithDraw, walletWithDraw } = useSelector(state => state.wallets);
  useEffect(() => {
    dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

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
