import { StyleSheet } from 'react-native';
import { TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: SPACING.XXNormal,
    paddingHorizontal: SPACING.Normal
  },
  title: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.Small
  },
  content: {
    flex: 1,
    marginTop: SPACING.XXNormal
  },
  rowWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default styles;
