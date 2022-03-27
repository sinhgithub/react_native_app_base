import { FONT_FAMILY } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { MAIN_HEADER_HEIGHT, SPACING } from 'constants/size';
import { Shadow } from 'constants/stylesCSS';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.XNormal,
    height: MAIN_HEADER_HEIGHT,
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow
  },
  mainHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  mainHeaderLeftText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.XNormal
  },
  mainHeaderMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  mainHeaderMiddleText: {
    textAlign: 'center',
    flex: 1
  },
  mainHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flex: 1,
    justifyContent: 'flex-end'
  },
  mainHeaderRightText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.XLarge
  }
});

export default styles;
