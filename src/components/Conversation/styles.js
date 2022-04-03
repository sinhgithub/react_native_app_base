import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.White,
    paddingVertical: SPACING.Normal,
    paddingHorizontal: SPACING.XNormal,
    flex: 1,
    justifyContent: 'space-between'
  },
  rowDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  conversationAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  conversationContent: {
    paddingLeft: SPACING.XXNormal,
    paddingRight: SPACING.Large,
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.BOLD
  },
  desc: {
    fontSize: FONT_SIZE.Small,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: LINE_HEIGHT.Small
  },
  timeText: {
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Gray,
    fontFamily: FONT_FAMILY.REGULAR
  }
});

export default styles;
