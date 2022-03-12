import { SPACING } from 'constants/size';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR, BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  income: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1,
    paddingVertical: SPACING.XXNormal
  },
  incomeTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  incomeTitleText: {
    marginLeft: SPACING.Normal,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  },
  incomeWage: {
    paddingVertical: SPACING.XSmall,
    backgroundColor: BACKGROUND_COLOR.Pink,
    paddingHorizontal: SPACING.Normal,
    borderRadius: 8
  },
  incomeWageText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.RedBasic
  }
});

export default styles;
