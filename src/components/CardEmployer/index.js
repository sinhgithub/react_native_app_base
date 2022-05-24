import { getImageFromHost } from 'configs/appConfigs';
import { TEXT_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICPosition } from 'assets/icons';
import { scale } from 'utils/responsive';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { SPACING } from 'constants/size';

const CardEmployer = props => {
  const { containerStyle, data, onPress = () => {} } = props;
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.bannerWrapper}>
        {data?.banner ? (
          <FastImage
            source={{
              uri: getImageFromHost(data?.banner)
            }}
            resizeMode="cover"
            style={styles.banner}
          />
        ) : (
          <View style={styles.bannerWrapper} />
        )}
        {data?.logo ? (
          <FastImage
            source={{
              uri: getImageFromHost(data?.logo)
            }}
            resizeMode="cover"
            style={styles.logo}
          />
        ) : (
          <View style={styles.logo} />
        )}
      </View>
      <View style={styles.desc}>
        <Text style={styles.bannerName}>{data?.companyName || ''}</Text>
        <Text style={styles.jobCount}>
          {data?.jobCount ? `${data?.jobCount} việc đang tuyển dụng` : 'Số việc đang tuyển dụng'}
        </Text>
        <View style={styles.location}>
          <ICPosition width={15} />
          <Text style={styles.locationName}>{data?.province?.name || 'Tên tỉnh thành'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(250),
    borderRadius: 10,
    backgroundColor: 'white'
  },
  bannerWrapper: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'gray'
  },
  banner: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: scale(60),
    height: scale(60),
    borderRadius: 30,
    position: 'absolute',
    left: 15,
    bottom: -30,
    backgroundColor: 'white'
  },
  logoEmpty: {
    width: scale(60),
    height: scale(60)
  },
  desc: {
    marginTop: scale(40),
    paddingHorizontal: scale(15)
  },
  bannerName: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.BodyText,
    lineHeight: LINE_HEIGHT.BodyText
  },
  jobCount: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.RedBasic,
    fontSize: FONT_SIZE.REGULAR,
    lineHeight: LINE_HEIGHT.REGULAR,
    marginTop: SPACING.Normal
  },
  location: {
    marginTop: SPACING.Normal,
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationName: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.REGULAR,
    lineHeight: LINE_HEIGHT.REGULAR,
    marginLeft: SPACING.XNormal
  }
});

export default memo(CardEmployer);
