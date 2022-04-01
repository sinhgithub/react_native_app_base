import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default_avatar } from 'assets/images';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import FastImage from 'react-native-fast-image';

const Avatar = props => {
  const { avatar } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {avatar ? (
          <FastImage source={{ uri: avatar }} />
        ) : (
          <Image source={default_avatar} style={styles.image} resizeMode="contain" />
        )}
      </View>
      <TouchableOpacity style={styles.changeArea}>
        <Text style={styles.changeText}>Đổi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  changeArea: {
    marginTop: SPACING.Small,
    borderRadius: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  changeText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.RedBasic,
    textAlign: 'center',
    paddingHorizontal: SPACING.Normal
  },
  numberProfile: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    textAlign: 'center',
    marginTop: SPACING.XXNormal
  }
});

export default memo(Avatar);
