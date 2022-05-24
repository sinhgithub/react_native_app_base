import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletWithDrawHandle } from 'actions/wallet';
import Button from 'components/Button';
import { SPACING } from 'constants/size';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';

const WithdrawRequest = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { walletWithDraw } = useSelector(state => state.wallets);

  useEffect(() => {
    dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === walletWithDraw?.data?.length - 1;
    return (
      <CardWallet from="withDraw" isLastItem={isLastItem} data={item} key={item.id || index} />
    );
  };

  const onWithDrawRequest = useCallback(() => {
    navigation.navigate(SCREENS_NAME.WITHDRAW_REQUEST, {});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flex1}
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={walletWithDraw?.data || []}
        renderItem={renderItem}
      />
      <View style={styles.buttonWithDraw}>
        <Button type="modal" title="Yêu cầu rút tiền" submitMethod={onWithDrawRequest} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonWithDraw: {
    paddingHorizontal: SPACING.XXNormal
  },
  flex1: {
    flex: 1
  }
});

export default memo(WithdrawRequest);
