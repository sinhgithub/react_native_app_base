import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import {
  DEVICE_HEIGHT,
  statusBarHeight,
  navbarHeight,
  SPACING,
  BOTTOM_TAB_HEIGHT
} from 'constants/size';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { scale } from 'utils/responsive';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.XNormal,
    paddingVertical: SPACING.Normal,
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    marginBottom: SPACING.XSmall,
    marginLeft: SPACING.Small,
    marginRight: SPACING.Small,
    borderRadius: scale(12)
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.Normal,
    color: TEXT_COLOR.Black,
    textTransform: 'uppercase'
  }
});

export default styles;
