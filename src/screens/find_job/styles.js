import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from 'constants/colors';
import { DEVICE_HEIGHT, statusBarHeight, navbarHeight, SPACING } from 'constants/size';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  tabItemStyle: {
    width: '33%'
  },
  findJobScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  searchArea: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.XXNormal,
    marginTop: scale(12),
    alignItems: 'center'
  },
  input: {
    height: 48,
    flex: 1
  },
  filter: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5
  },
  lits: {
    flex: 1
  }
});

export default styles;
