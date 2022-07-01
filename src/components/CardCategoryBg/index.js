import { banner_default } from 'assets/images';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const CardCategoryBg = props => {
  const { onPress, containerStyle, data } = props;
  const image = data?.image;

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => onPress?.(data)}>
      <View style={styles.backgroundDisable} />
      {image ? (
        <FastImage source={{ uri: image }} resizeMode="stretch" style={styles.image} />
      ) : (
        <Image source={banner_default} resizeMode="stretch" style={styles.image} />
      )}

      <Text style={styles.categoryName}>{data?.name || ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  categoryName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.White,
    zIndex: 3
  },
  backgroundDisable: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  }
});

export default memo(CardCategoryBg);
