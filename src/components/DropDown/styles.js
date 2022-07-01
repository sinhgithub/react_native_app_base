import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.XNormal,
    paddingHorizontal: SPACING.XXNormal,
    alignItems: 'center'
  },
  menuTitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    fontSize: FONT_SIZE.Heading,
    color: 'white'
  },
  dropDown: {
    paddingLeft: SPACING.Large
  },
  dropDownTitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: 'white',
    marginBottom: SPACING.XNormal
  }
});

export default styles;
