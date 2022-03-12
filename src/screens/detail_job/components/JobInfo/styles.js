import { BACKGROUND_COLOR, TEXT_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { StyleSheet } from 'react-native';
import { scale } from 'utils/responsive';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';

const styles = StyleSheet.create({
  jobInfoInfo: {
    paddingVertical: SPACING.Large,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  jobInfoInfoImage: {
    width: scale(100),
    height: scale(100),
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  jobInfoInfoImageImage: {
    width: scale(100),
    height: scale(100),
    borderRadius: 8
  },
  jobInfoInfoImageText: {
    position: 'absolute',
    borderRadius: 8
  },
  jobInfoInfoImageTextDesc: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.White
  },
  jobInfoInfoTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.Black,
    fontSize: FONT_SIZE.Title3,
    textAlign: 'center',
    lineHeight: LINE_HEIGHT.Title3,
    marginTop: SPACING.Large
  },
  jobInfoInfoCompany: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    marginTop: SPACING.Small
  },
  jobInfoInfoAddress: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    marginTop: SPACING.Small
  },
  jobInfoInfoButtonArea: {
    flexDirection: 'row',
    marginTop: SPACING.Normal
  },
  jobInfoInfoButtonAreaButtonBonus: {
    marginLeft: SPACING.Small,
    backgroundColor: BACKGROUND_COLOR.White,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.RedBasic
  },
  jobInfoInfoButtonAreaButtonBonusTitle: {
    color: TEXT_COLOR.RedBasic
  },
  jobInfoInfoButtonAreaButtonWage: {
    marginLeft: SPACING.Small,
    backgroundColor: BACKGROUND_COLOR.LightPink,
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.LightPink
  },
  jobInfoInfoButtonAreaButtonWageTitle: {
    color: TEXT_COLOR.RedBasic
  },
  jobInfoInfoRemainTime: {
    width: '100%',
    marginTop: SPACING.Large,
    flexDirection: 'row',
    alignItems: 'center'
  },
  jobInfoInfoRemainTimeText: {
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.RedBasic,
    fontSize: FONT_SIZE.BodyText,
    paddingLeft: SPACING.Normal
  }
});

export default styles;
