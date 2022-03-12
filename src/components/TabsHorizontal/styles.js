import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';
import { TEXT_COLOR, CUSTOM_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  tabsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  tabItem: {
    paddingVertical: SPACING.Medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: CUSTOM_COLOR.Orange,
    flexDirection: 'row'
  },
  tabItemTitle: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.textBlack
  },
  tabItemTotal: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.textBlack
  }
});

export default styles;
