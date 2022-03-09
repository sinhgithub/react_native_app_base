import { SPACING, SIZE_TOGGLE_CONTENT_BOTTOM } from 'constants/size';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR, BACKGROUND_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  toggle: {
    height: SIZE_TOGGLE_CONTENT_BOTTOM,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toggleTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    paddingRight: SPACING.XXNormal
  },
  borderLeft: {
    width: 3,
    height: 30,
    backgroundColor: BACKGROUND_COLOR.RedBasic
  },
  toggleTitleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black,
    marginLeft: SPACING.XXNormal
  },
  toggleIcon: {
    justifyContent: 'center'
  }
});

export default styles;
