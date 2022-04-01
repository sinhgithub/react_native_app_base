import React, { memo, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getWalletTotalHandle } from 'actions/wallet';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { Icon } from 'components/';

import { SPACING } from 'constants/size';

import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';

import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { Shadow } from 'constants/stylesCSS';
import { formatNumber } from 'helpers/formatNumber';

const IncomeOverView = props => {
  const { user, loading } = useSelector(state => state.user);
  const { walletTotal, loadingWalletTotal } = useSelector(state => state.wallets);
  const avatar = user?.avatar;
  const [avatarSize, setAvatarSize] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWalletTotalHandle({}));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <View
        style={styles.avatarArea}
        onLayout={e => {
          const { layout } = e.nativeEvent;
          setAvatarSize(layout);
        }}>
        {avatar ? (
          <FastImage
            source={{
              uri: avatar
            }}
            style={[
              styles.avatar,
              avatarSize && { width: avatarSize.width, height: avatarSize.width }
            ]}
          />
        ) : (
          <FastImage
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/000/420/940/non_2x/avatar-icon-vector-illustration.jpg'
            }}
            style={[
              styles.avatar,
              avatarSize && { width: avatarSize.width, height: avatarSize.width }
            ]}
          />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.contentNameText}>{user?.name || ''}</Text>
        <View style={styles.mgt4}>
          <View style={styles.row1}>
            <Icon fontName="AntDesign" name="star" size={20} color={BACKGROUND_COLOR.RedBasic} />
            <Text style={styles.commonSmallText}>{user?.type || ''}</Text>
          </View>
          <View style={styles.row2}>
            <Icon fontName="AntDesign" name="mail" size={20} color={BACKGROUND_COLOR.RedBasic} />
            <Text style={styles.commonSmallText}>{user?.email || ''}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.info1}>
            <View style={styles.row1}>
              <Icon
                fontName="Entypo"
                name="arrow-up"
                size={20}
                color={BACKGROUND_COLOR.BlueStone}
              />
              <Text style={styles.infoIncome}>{formatNumber(walletTotal?.total, ',')}</Text>
            </View>
            <Text style={styles.infoIncomeText}>Tổng số dư</Text>
          </View>
          <View style={styles.info2}>
            <View style={styles.row1}>
              <Icon
                fontName="Entypo"
                name="arrow-down"
                size={20}
                color={BACKGROUND_COLOR.RedBasic}
              />
              <Text style={styles.infoIncome}>{formatNumber(walletTotal?.balance, ',')}</Text>
            </View>
            <Text style={styles.infoIncomeText}>Tổng thu nhập</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  row2: {
    flexDirection: 'row',
    marginTop: SPACING.Small,
    alignItems: 'center'
  },
  mgt4: {
    marginTop: SPACING.Small
  },
  commonSmallText: {
    fontSize: FONT_SIZE.Small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    marginLeft: SPACING.Normal
  },
  container: {
    flexDirection: 'row'
  },
  avatarArea: {
    width: '30%'
  },
  avatar: {
    minWidth: 100,
    minHeight: 100
  },
  content: {
    marginLeft: SPACING.XNormal,
    flex: 1
  },
  contentNameText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black
  },
  info: {
    flexDirection: 'row',
    marginTop: SPACING.Small
  },
  info2: {
    marginLeft: SPACING.XXNormal,
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow,
    padding: SPACING.Normal
  },
  info1: {
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow,
    padding: SPACING.Normal
  },
  infoIncome: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black
  },
  infoIncomeText: {
    fontSize: FONT_SIZE.Small,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Gray
  }
});

export default memo(IncomeOverView);
