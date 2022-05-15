import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  findJobScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  tabItemStyle: {
    width: '33%'
  },
  inputArea: {
    paddingHorizontal: SPACING.XXNormal
  }
});

export default styles;
