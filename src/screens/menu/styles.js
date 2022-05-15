import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(29, 31, 35, 0.8)'
  },
  menuArea: {
    marginTop: SPACING.Large
  },
  companyInfo: {
    paddingVertical: SPACING.XXNormal,
    paddingHorizontal: SPACING.XXNormal,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderTopColor: 'white',
    marginTop: SPACING.XNormal
  },
  companyInfoText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: 'white',
    marginBottom: SPACING.XNormal,
    flex: 1,
    lineHeight: LINE_HEIGHT.BodyText
  },
  buttonArea: {
    paddingHorizontal: SPACING.XLarge
  }
});

export default styles;
