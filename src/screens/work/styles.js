import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  workScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  tabItemStyle: {
    width: '33%'
  },
  content: {
    flex: 1
  }
});

export default styles;
