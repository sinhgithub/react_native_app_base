import { StyleSheet } from 'react-native';
import { TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
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
