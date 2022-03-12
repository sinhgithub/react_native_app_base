import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import {
  DEVICE_HEIGHT,
  statusBarHeight,
  navbarHeight,
  SPACING,
  BOTTOM_BAR_HEIGHT
} from 'constants/size';
import { scale } from 'utils/responsive';

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
  },
});

export default styles;
