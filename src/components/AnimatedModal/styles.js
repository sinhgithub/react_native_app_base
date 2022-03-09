import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from 'constants/colors';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  modalWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    width: '100%',
    backgroundColor: BACKGROUND_COLOR.White
  },
  closeContainer: {
    top: scale(14),
    left: scale(14),
    position: 'absolute',
    zIndex: 2
  },
  closeArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  }
});

export default styles;
