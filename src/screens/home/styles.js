import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
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
