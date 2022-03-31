import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_HEADER_HEIGHT, SPACING } from 'constants/size';
import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';

const Header = props => {
  const { onPress = () => {} } = props;
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.leftText}>Hồ sơ cá nhân</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.rightText}>Chi tiết</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: MAIN_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flex: 1,
    paddingRight: SPACING.XXNormal
  },
  leftText: {
    fontSize: FONT_SIZE.Title3,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black
  },
  rightText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.RedBasic
  }
});

export default memo(Header);
