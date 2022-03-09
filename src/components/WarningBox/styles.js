import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_FAMILY } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  WarningBox: {
    paddingHorizontal: SPACING.XXNormal,
    paddingVertical: SPACING.Normal,
    backgroundColor: BACKGROUND_COLOR.Pink,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    borderColor: CUSTOM_COLOR.RedBasic,
    borderWidth: 1
  },
  WarningBoxText: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.RedBasic
  },
  WarningBoxActionText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.RedBasic,
    marginLeft: SPACING.Small,
    textDecorationColor: CUSTOM_COLOR.RedBasic,
    textDecorationLine: 'underline'
  }
});

export default styles;
