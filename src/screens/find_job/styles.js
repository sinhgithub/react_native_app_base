import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { navbarHeight, TAB_MENU_HEIGHT } from 'constants/size';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  findJobScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  tabItemStyle: {
    width: '33%'
  }
});

export default styles;
