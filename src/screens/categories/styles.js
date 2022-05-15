import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  wrapper: {
    paddingHorizontal: SPACING.Normal
  },
  businessCategoryContainer: {
    width: '32%',
    marginVertical: SPACING.Normal
  },
  scrollView: {
    flex: 1
  }
});

export default styles;
