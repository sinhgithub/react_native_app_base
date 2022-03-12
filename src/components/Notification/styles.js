import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  notification: {
    flexDirection: 'row',
    marginTop: SPACING.XNormal,
    alignItems: 'flex-start',
    paddingBottom: SPACING.XXNormal
  },
  notificationStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginTop: SPACING.Normal
  },
  notificationContent: {
    flex: 1,
    paddingLeft: SPACING.XXNormal
  },
  title: {
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.BOLD,
    lineHeight: LINE_HEIGHT.BodyText
  },
  desc: {
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: LINE_HEIGHT.SubHead,
    marginTop: SPACING.Small
  },
  date: {
    fontSize: FONT_SIZE.Small,
    color: TEXT_COLOR.Gray,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: SPACING.Normal
  },
  marginVertical12: {
    marginVertical: 12
  }
});

export default styles;
