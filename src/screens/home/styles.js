import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { scale } from 'utils/responsive';
import { statusBarHeight, BOTTOM_TAB_HEIGHT } from 'constants/size';

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1,
    paddingBottom: BOTTOM_TAB_HEIGHT
  },
  scrollView: {
    flex: 1
  },
  notificationWarning: {
    paddingHorizontal: SPACING.XNormal,
    paddingBottom: SPACING.Small,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  rowBigIcon: {
    paddingHorizontal: SPACING.XNormal,
    paddingVertical: scale(10)
  }
});

export default styles;
