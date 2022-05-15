import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR } from 'constants/colors';
import { Shadow } from 'constants/stylesCSS';

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1,
    paddingHorizontal: SPACING.Normal
  },
  employersContainer: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    marginVertical: SPACING.Normal,
    ...Shadow,
    paddingBottom: SPACING.Normal
  }
});

export default styles;
