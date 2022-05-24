import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
const imageTmp = 'https://www.w3schools.com/w3css/img_lights.jpg';

const CardCategoryBg = props => {
  const { onPress, containerStyle, data } = props;
  const image = data?.image ? data?.image : imageTmp;

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => onPress?.(data)}>
      <View style={styles.backgroundDisable} />
      <FastImage source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <Text style={styles.categoryName}>{data?.name || 'Tên category'}</Text>
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
