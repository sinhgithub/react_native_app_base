import { StyleSheet } from 'react-native';
import { TEXT_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  // yearTextStyles: {
  //   color: TEXT_COLOR.Black
  // },
  // arrowStyles: {
  //   tintColor: CUSTOM_COLOR.Orange
  // },
  headerArea: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: SPACING.XXNormal
  },
  dateHeader: {
    flex: 1
  },
  dateHeaderText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    textAlign: 'center'
  }
});

export default styles;
