import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletHistoryHandle } from 'actions/wallet';
import { find } from 'assets/images';
import { BACKGROUND_COLOR } from 'constants/colors';

const WalletHistory = () => {
  const dispatch = useDispatch();
  const { walletHistory } = useSelector(state => state.wallets);
  useEffect(() => {
    dispatch(getWalletHistoryHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === walletHistory?.data?.length - 1;
    return <CardWallet isLastItem={isLastItem} data={item} key={item.id || index} from="history" />;
  };

  const renderListEmptyComponent = useCallback(() => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Bạn chưa có lịch sử ví</Text>
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flex1}
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={walletHistory?.data || []}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent()}
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
  },
  imageFindJob: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '50%'
  }
});

export default memo(WalletHistory);
