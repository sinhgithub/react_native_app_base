import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_HEADER_HEIGHT, SPACING } from 'constants/size';
import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.leftText}>Ho so ca nhan</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity>
          <Text style={styles.rightText}>Chi tiet</Text>
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
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.BlueStone
  }
});

export default memo(Header);
