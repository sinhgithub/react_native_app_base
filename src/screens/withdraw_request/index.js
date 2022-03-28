import { BACKGROUND_COLOR } from 'constants/colors';
import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { Icon } from 'components/';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';
import { CustomInput } from 'components/';

const WithDrawRequest = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <CustomInput />
          <CustomInput type="select" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White
  },
  modalTitle: {
    flexDirection: 'row',
    paddingBottom: SPACING.XXNormal,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  modalTitleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black
  },
  form: {
    marginTop: SPACING.XXLarge
  }
});

export default memo(WithDrawRequest);
