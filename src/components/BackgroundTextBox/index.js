import React, { memo } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';

const BackgroundTextBox = props => {
  const { title, onSubmit, containerStyle, activeOpacity, gradient, textStyle } = props;
  return (
    <TouchableOpacity onPress={onSubmit} activeOpacity={activeOpacity}>
      <LinearGradient
        style={[styles.container, containerStyle]}
        colors={gradient || ['#FFA500', '#FF8C00']}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Title3,
    color: TEXT_COLOR.White,
    textTransform: 'uppercase'
  }
});

export default memo(BackgroundTextBox);
