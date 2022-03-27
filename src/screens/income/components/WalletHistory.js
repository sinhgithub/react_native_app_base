import React, { memo, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletHistoryHandle } from 'actions/wallet';
const WalletHistory = props => {
  const dispatch = useDispatch();
  const { loadingWalletHistory, walletHistory } = useSelector(state => state.wallets);
  useEffect(() => {
    dispatch(getWalletHistoryHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === walletHistory?.data?.length - 1;
    return <CardWallet isLastItem={isLastItem} data={item} key={item.id || index} from="history" />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={walletHistory?.data || []}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(WalletHistory);
