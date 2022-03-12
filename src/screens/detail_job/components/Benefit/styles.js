import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  benefitContent: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  benefitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SPACING.XNormal
  },
  benefitItemLeft: {
    flexDirection: 'row'
  },
  benefitItemLeftIcon: {
    marginTop: SPACING.XSmall
  },
  benefitItemLeftContent: {
    flexGrow: 1,
    marginLeft: SPACING.XNormal
  },
  benefitItemLeftContentText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  },
  benefitItemLeftContentGray: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: 'gray',
    lineHeight: LINE_HEIGHT.SubHead
  },
  benefitItemRight: {}
});

export default styles;
