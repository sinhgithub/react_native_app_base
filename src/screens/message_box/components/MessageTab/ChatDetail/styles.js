import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { StyleSheet } from 'react-native';
import { scale } from 'utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.Primary
  },
  wrapper: {
    backgroundColor: CUSTOM_COLOR.WhiteGray,
    borderRadius: scale(8),
    flex: 1,
    height: 48
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1
  },
  input: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.GreenBold,
    textAlignVertical: 'center',
    paddingTop: SPACING.Medium,
    paddingHorizontal: SPACING.Medium,
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(30),
    height: scale(30),
    paddingRight: SPACING.XXNormal
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  dayContainer: {
    marginBottom: SPACING.XXLarge,
    marginTop: SPACING.XLarge
  },
  textMessage: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.White,
    lineHeight: LINE_HEIGHT.SubHead
  },
  iconEmptyValue: {
    marginRight: SPACING.XXNormal
  },
  disableSend: {}
});
