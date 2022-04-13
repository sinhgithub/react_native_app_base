import { StyleSheet } from 'react-native';
import { navbarHeight, screenHeight } from 'constants/size';
import { SPACING } from 'constants/space';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  scrollViewContent: {
    height: screenHeight - navbarHeight,
    justifyContent: 'flex-end'
  },
  scrollViewContentItem: {
    paddingHorizontal: SPACING.XXNormal
  },
  formGroup: {
    marginTop: SPACING.Small
  },
  icon: {
    position: 'absolute',
    top: SPACING.XNormal,
    left: SPACING.XXNormal
  },
  input: {
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.White,
    borderRadius: 12,
    paddingLeft: SPACING.S_50,
    color: TEXT_COLOR.White
  },
  formWrapper: {}
});

export default styles;
