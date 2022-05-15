import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flex1: {
    flex: 1
  },
  input: {
    fontSize: 500
  },
  confirmButton: {
    paddingVertical: scale(16),
    backgroundColor: CUSTOM_COLOR.RedBasic,
    borderRadius: scale(12),
    marginTop: scale(24)
  },
  confirmTxt: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.BOLD,
    alignSelf: 'center',
    fontSize: scale(18)
  },
  logo: {
    width: 240,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40
  },
  loginText: {
    marginBottom: scale(10),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Title3,
    alignSelf: 'center'
  },
  loginText2: {
    marginBottom: scale(20),
    color: CUSTOM_COLOR.RedBasic,
    fontSize: FONT_SIZE.Small,
    alignSelf: 'center'
  },
  loginText3: {
    color: CUSTOM_COLOR.Black,
    fontSize: FONT_SIZE.Title3,
    alignSelf: 'center'
  }
});

export default styles;
