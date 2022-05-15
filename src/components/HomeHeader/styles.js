import { StyleSheet } from 'react-native';
import { paddingHelloHeader, Shadow } from 'constants/stylesCSS';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: paddingHelloHeader.paddingVertical,
    paddingHorizontal: paddingHelloHeader.paddingHorizontal,
    backgroundColor: BACKGROUND_COLOR.White,
    marginBottom: SPACING.Small,
    ...Shadow
  }
});

export default styles;
