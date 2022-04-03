import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { StyleSheet } from 'react-native';
import { scale } from 'utils/responsive';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';

const styles = StyleSheet.create({
  buttonRight: {
    width: scale(64),
    height: scale(64),
    backgroundColor: BACKGROUND_COLOR.RedError,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRightText: {
    fontSize: FONT_SIZE.Small,
    color: TEXT_COLOR.White,
    lineHeight: LINE_HEIGHT.SubHead,
    fontFamily: FONT_FAMILY.REGULAR
  }
});

export default styles;
