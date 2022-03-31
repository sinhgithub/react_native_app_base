import { FONT_FAMILY } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { StyleSheet } from 'react-native';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  NotificationWarning: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: BACKGROUND_COLOR.XDarkBlue,
    paddingVertical: SPACING.XNormal,
    borderRadius: scale(16),
    paddingHorizontal: SPACING.XXNormal
  },
  NotificationWarningContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  NotificationWarningContentText: {
    flexGrow: 1,
    paddingLeft: SPACING.XNormal,
    color: TEXT_COLOR.White
  },
  NotificationWarningAction: {
    paddingLeft: SPACING.XXNormal,
    borderLeftWidth: 1,
    borderLeftColor: CUSTOM_COLOR.White
  },
  NotificationWarningActionText: {
    color: TEXT_COLOR.Orange
  }
});

export default styles;
