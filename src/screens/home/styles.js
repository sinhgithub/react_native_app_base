import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  bannerWrapper: {
    width: '100%',
    height: 150
  },
  banner: {
    width: '100%',
    height: 150
  },
  slogan1: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  slogan: {
    fontSize: FONT_SIZE.SubHead,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: LINE_HEIGHT.SubHead
  },
  slogan2: {
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  searchWrapper: {
    paddingHorizontal: SPACING.XXNormal
  },
  category: {
    marginTop: SPACING.XXLarge
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.Medium
  },
  bushinessCategoriesWrapper: {
    flexDirection: 'row'
  },
  businessCategoryContainer: {
    marginHorizontal: SPACING.Normal
  },
  employersContainer: {
    marginHorizontal: SPACING.Normal,
    ...Shadow,
    marginBottom: SPACING.Normal,
    paddingBottom: SPACING.XNormal
  },
  sectionName: {
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: LINE_HEIGHT.Heading,
    color: TEXT_COLOR.Black
  },
  seeAll: {
    fontSize: FONT_SIZE.SubHead,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: LINE_HEIGHT.SubHead,
    color: 'gray'
  }
});

export default styles;
