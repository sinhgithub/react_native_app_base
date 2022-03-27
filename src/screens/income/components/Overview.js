import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletHandle } from 'actions/wallet';

const Overview = props => {
  const dispatch = useDispatch();

  const { loadingWallet, wallets } = useSelector(state => state.wallets);
  useEffect(() => {
    dispatch(getWalletHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);
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
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Overview);
