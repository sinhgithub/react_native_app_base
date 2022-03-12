import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  jobDesc: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  jobDescTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  },
  jobDescContent: {
    paddingBottom: SPACING.XXNormal
  },
  jobDescContentItem: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText,
    marginTop: SPACING.Small
  }
});

export default styles;
