import { FONT_FAMILY } from 'constants/appFonts';
import { BACKGROUND_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { Shadow } from 'constants/stylesCSS';
import { StyleSheet } from 'react-native';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  rowRowBigIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowRowBigIconItem: {
    width: '30%',
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SPACING.Small,
    borderRadius: scale(8)
  },
  rowRowBigIconItemText: {
    fontFamily: FONT_FAMILY.BOLD,
    marginTop: SPACING.Small
  }
});

export default styles;
