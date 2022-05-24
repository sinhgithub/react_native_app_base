import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  jobContactContent: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.BasicGray
  },
  jobContactItem: {
    paddingBottom: SPACING.XXNormal
  },
  jobContactItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: SPACING.XNormal
  },
  jobContactItemContentCompany: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: SPACING.XXNormal
  },
  logo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 25
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  companyName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.XXNormal,
    paddingRight: SPACING.XNormal,
    flex: 1
  },
  jobContactItemContentIconAction: {
    flexDirection: 'row'
  },
  iconAction: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  actionPhone: {
    marginLeft: SPACING.Normal
  }
});

export default styles;
