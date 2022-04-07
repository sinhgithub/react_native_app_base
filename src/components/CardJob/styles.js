import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  cardJob: {},
  cardJobContent: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.XNormal,
    paddingVertical: SPACING.XXNormal,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  cardJobContentImage: {
    width: '25%',
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardJobContentImageTextDesc: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.White
  },
  image: {
    borderRadius: 8
  },
  cardJobContentInfo: {
    paddingLeft: SPACING.Normal,
    flex: 1,
    flexGrow: 1
  },
  cardJobContentInfoName: {
    fontFamily: FONT_FAMILY.SEMIBOLD,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.BodyText,
    lineHeight: LINE_HEIGHT.BodyText
  },
  cardJobContentInfoAddress: {
    fontFamily: FONT_FAMILY.SEMIBOLD,
    marginTop: SPACING.Small,
    fontSize: FONT_SIZE.SubHead,
    lineHeight: LINE_HEIGHT.SubHead
  },
  cardJobContentInfoIncome: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SubHead,
    marginTop: SPACING.XSmall,
    color: TEXT_COLOR.RedBasic
  },
  buttonContainerStyle: {
    marginTop: SPACING.XSmall
  },
  buttonStyle: {
    backgroundColor: BACKGROUND_COLOR.RedBasic,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.RedBasic
  },
  titleButtonStyle: {
    color: TEXT_COLOR.White
  },
  buttonBonusStyle: {
    backgroundColor: BACKGROUND_COLOR.White,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.RedBasic
  },
  titleButtonBonusStyle: {
    color: TEXT_COLOR.RedBasic
  },
  buttonPaidAfterWorkStyle: {
    backgroundColor: BACKGROUND_COLOR.LightPink,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.LightPink
  },
  titleButtonPaidAfterWorkStyle: {
    color: TEXT_COLOR.RedBasic
  },
  buttonsWrapper: {
    flexDirection: 'row'
  },
  ml4: {
    marginLeft: SPACING.Small
  },
  marginVertical12: {
    marginVertical: scale(12)
  },
  jobInfoInfoImageText: {
    position: 'absolute',
    borderRadius: 8
  },
  jobInfoInfoImageTextDesc: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.White
  }
});

export default styles;
