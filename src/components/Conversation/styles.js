import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { TEXT_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  conversation: {
    flexDirection: 'row',
    marginTop: SPACING.XNormal,
    alignItems: 'center',
    paddingBottom: SPACING.XXNormal
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
    flex: 1,
    paddingLeft: SPACING.XXNormal
  },
  name: {
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.BOLD
  },
  desc: {
    fontSize: FONT_SIZE.Small,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR
  }
});

export default styles;
