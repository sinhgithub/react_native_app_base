import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  jobRequireContent: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  jobRequireItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SPACING.XNormal
  },
  jobRequireItemLeft: {
    flexDirection: 'row'
  },
  jobRequireItemLeftIcon: {
    marginTop: SPACING.XSmall
  },
  jobRequireItemLeftContent: {
    flexGrow: 1,
    marginLeft: SPACING.XNormal
  },
  jobRequireItemLeftContentText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    lineHeight: LINE_HEIGHT.BodyText
  },
  jobRequireItemLeftContentGray: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: 'gray',
    lineHeight: LINE_HEIGHT.SubHead
  },
  jobRequireItemRight: {}
});

export default styles;
