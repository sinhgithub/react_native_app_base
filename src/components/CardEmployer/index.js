import { getImageFromHost } from 'configs/appConfigs';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import React, { memo, useCallback } from 'react';
import { TouchableOpacity, Text, View, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICPosition } from 'assets/icons';
import { scale } from 'utils/responsive';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';
import { SPACING } from 'constants/size';

const CardEmployer = props => {
  const { containerStyle, data } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.bannerWrapper}>
        {data?.banner ? (
          <FastImage
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s'
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
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVi1gDxXvbbSWpgvOjUf3dVIsufoQq9INlTIkWCrvQA&s'
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
    </View>
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
