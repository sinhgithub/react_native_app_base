import { StyleSheet } from 'react-native';
import { paddingHelloHeader, Shadow } from 'constants/stylesCSS';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  headerHello: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: paddingHelloHeader.paddingVertical,
    paddingHorizontal: paddingHelloHeader.paddingHorizontal,
    backgroundColor: BACKGROUND_COLOR.White,
    marginBottom: SPACING.Small,
    ...Shadow
  },
  headerHelloLeft: {
    flexGrow: 1,
    marginRight: scale(30),
    flexDirection: 'row'
  },
  headerHelloLeftText: {
    fontFamily: FONT_FAMILY.XBOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black
  },
  headerHelloLeftTextName: {
    fontFamily: FONT_FAMILY.XBOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black,
    textTransform: 'capitalize'
  },
  headerHelloRight: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  headerHelloRightLineMenu: {
    width: scale(30),
    height: scale(5),
    borderRadius: 2,
    backgroundColor: BACKGROUND_COLOR.Gray,
    marginTop: scale(2)
  }
});

export default styles;
