import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  titleSection: {
    paddingVertical: SPACING.Normal,
    paddingHorizontal: SPACING.XNormal,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  titleSectionText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  }
});

export default styles;
