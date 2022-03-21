import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchArea: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    borderRadius: 20
  },
  searchAreaIcon: {
    paddingHorizontal: SPACING.Normal
  },
  searchAreaInput: {
    flexGrow: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: SPACING.XXNormal,
    fontSize: FONT_SIZE.Small,
    color: TEXT_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR
  },
  filterArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    borderRadius: 20,
    marginLeft: SPACING.XXNormal
  }
});

export default styles;
