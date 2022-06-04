import { StyleSheet } from 'react-native';
import { HEIGHT_BUTTON_BOTTOM } from 'constants/size';
import { SPACING } from 'constants/space';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {},
  button: {
    padding: SPACING.XXNormal,
    marginTop: SPACING.S_40,
    backgroundColor: BACKGROUND_COLOR.RedBasic,
    borderRadius: 50
  },
  buttonTitle: {
    color: TEXT_COLOR.White,
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  forgetPassword: {
    marginTop: SPACING.S_40
  },
  forgetPasswordTitle: {
    color: TEXT_COLOR.White,
    textAlign: 'center',
    marginBottom: SPACING.S_40,
    textDecorationLine: 'underline'
  },
  buttonCard: {
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    paddingVertical: SPACING.Small,
    paddingHorizontal: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCardTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.SubHead
  },
  buttonConfirmReject: {
    height: HEIGHT_BUTTON_BOTTOM,
    width: '46%',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonConfirmRejectTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    textTransform: 'uppercase'
  },
  buttonConfirm: {
    backgroundColor: BACKGROUND_COLOR.RedBasic
  },
  buttonConfirmTitle: {
    color: TEXT_COLOR.White
  },
  buttonReject: {
    backgroundColor: BACKGROUND_COLOR.White,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.RedBasic
  },
  buttonRejectTitle: {
    color: TEXT_COLOR.RedBasic
  }
});

export default styles;
