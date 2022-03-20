import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'components/';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { TEXT_COLOR, CUSTOM_COLOR, BACKGROUND_COLOR } from 'constants/colors';

const Section = props => {
  const { containerStyle, leftTitle, rightTitle, descText, buttonTile, hideRightTittle } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.heading}>
        <View style={styles.headingLeft}>
          <Text style={styles.headingLeftText}>{leftTitle}</Text>
        </View>
        {!hideRightTittle && (
          <TouchableOpacity style={styles.headingRight}>
            <Text style={styles.headingRightText}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.headingTextDesc}>{descText}</Text>
      <Button
        type="modal"
        title={buttonTile}
        containerStyle={styles.button}
        titleStyle={styles.titleButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.Large
  },
  headingLeft: {
    paddingLeft: SPACING.XXNormal,
    borderLeftWidth: 1,
    borderLeftColor: CUSTOM_COLOR.RedBasic,
    flex: 1,
    paddingRight: SPACING.Large
  },
  headingLeftText: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black
  },
  headingRightText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.BlueStone
  },
  headingTextDesc: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  },
  button: {
    marginTop: 10,
    backgroundColor: BACKGROUND_COLOR.BasicGray
  },
  titleButton: {
    color: TEXT_COLOR.Black
  }
});

export default memo(Section);
