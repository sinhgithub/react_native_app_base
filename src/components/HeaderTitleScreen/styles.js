import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { MAIN_HEADER_HEIGHT, SPACING } from 'constants/size';
import { Shadow } from 'constants/stylesCSS';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: SPACING.XNormal,
    height: MAIN_HEADER_HEIGHT,
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow
  },
  mainHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SPACING.XXNormal,
    zIndex: 1
  },
  mainHeaderLeftText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black
  },
  titleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  titleText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.Heading
  }
});

export default styles;
