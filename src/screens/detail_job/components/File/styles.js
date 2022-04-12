import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  fileContent: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  fileItem: {
    paddingBottom: SPACING.XXNormal
  },
  fileItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: SPACING.XNormal
  },
  fileItemContentCompany: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: SPACING.XXNormal
  },
  fileItemText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    textDecorationColor: CUSTOM_COLOR.Black,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: 'blue',
    flex: 1
  }
});

export default styles;
