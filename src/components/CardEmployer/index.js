import { getImageFromHost } from 'configs/appConfigs';
import { TEXT_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICPosition } from 'assets/icons';
import { scale } from 'utils/responsive';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { banner_default, default_avatar } from 'assets/images';

const CardEmployer = props => {
  const { containerStyle, data, onPress = () => {} } = props;
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => onPress?.(data)}>
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
          <Image source={banner_default} style={styles.banner} resizeMode="stretch" />
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
          <Image source={default_avatar} style={styles.logo} resizeMode="cover" />
        )}
      </View>
      <View style={styles.desc}>
        <Text style={styles.bannerName}>{data?.companyName || ''}</Text>
        <Text style={styles.jobCount}>
          {data?.countJob >= 0 ? `${data?.countJob} việc đang tuyển dụng` : ''}
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
