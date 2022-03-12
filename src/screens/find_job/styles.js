import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import {
  DEVICE_HEIGHT,
  statusBarHeight,
  navbarHeight,
  SPACING,
  BOTTOM_TAB_HEIGHT
} from 'constants/size';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  findJobScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1,
    paddingBottom: BOTTOM_TAB_HEIGHT + navbarHeight + SPACING.XXNormal
  },
  tabItemStyle: {
    width: '33%'
  },
  searchInput: {
    paddingHorizontal: SPACING.XXNormal,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    paddingVertical: SPACING.Normal
  }
  // searchArea: {
  //   flexDirection: 'row',
  //   paddingHorizontal: SPACING.XXNormal,
  //   marginTop: scale(12),
  //   alignItems: 'center'
  // }
  // input: {
  //   height: 48,
  // },
  // filter: {
  //   width: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: -5
  // },
  // lits: {
  //   flex: 1
  // }
});

export default styles;
