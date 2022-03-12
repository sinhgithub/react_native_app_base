import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR, TEXT_COLOR, BACKGROUND_COLOR } from 'constants/colors';
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
    width: 30,
    height: 30,
    borderRadius: 25
  },
  companyName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    paddingLeft: SPACING.XXNormal
  },
  jobContactItemContentIconAction: {
    flexDirection: 'row'
  },
  iconAction: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: BACKGROUND_COLOR.Pink
  },
  actionPhone: {
    marginLeft: SPACING.XXNormal
  }
});

export default styles;