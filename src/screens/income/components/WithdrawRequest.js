import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import CardWallet from 'components/CardWallet';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletWithDrawHandle } from 'actions/wallet';
import Button from 'components/Button';
import { SPACING } from 'constants/size';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';
import { find } from 'assets/images';
import { BACKGROUND_COLOR } from 'constants/colors';

const WithdrawRequest = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { walletWithDraw } = useSelector(state => state.wallets);

  useEffect(() => {
    dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
  }, [dispatch]);

  const renderItem = ({ item, index }) => {
    const isLastItem = index === walletWithDraw?.data?.length - 1;
    // const colorTextCustom = index === 1 || index === 3 || index === 4 ? { color: 'gray' } : {};
    return (
      <CardWallet
        // colorTextCustom={colorTextCustom}
        from="withDraw"
        isLastItem={isLastItem}
        data={item}
        key={item.id || index}
      />
    );
  };

  const onWithDrawRequest = useCallback(() => {
    navigation.navigate(SCREENS_NAME.WITHDRAW_REQUEST, {});
  }, [navigation]);
  const renderListEmptyComponent = useCallback(() => {
    return (
      <View style={styles.imageFindJob}>
        <Image source={find} style={styles.image} resizeMode="contain" />
        <Text>Bạn chưa có yêu cầu rút tiền</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flex1}
        keyExtractor={(item, index) => `${item.id || index}${index}`}
        data={walletWithDraw?.data || []}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent()}
      />
      <View style={styles.buttonWithDraw}>
        <Button
          // disable={walletWithDraw?.data?.length <= 0}
          type="modal"
          title="Yêu cầu rút tiền"
          submitMethod={onWithDrawRequest}
        />
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

export default memo(WithdrawRequest);
