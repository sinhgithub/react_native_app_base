import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING, screenHeight, navbarHeight } from 'constants/size';
import { FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White
  },
  avatar: {
    marginTop: SPACING.Large
  },
  accountBank: {
    height: 35,
    backgroundColor: 'gray',
    alignItems: 'flex-start'
  },
  accountBankTextTitle: {
    textTransform: 'capitalize',
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black
  },
  accountBankContainer: {
    marginTop: SPACING.Large
  },
  detailProfile: {
    paddingHorizontal: SPACING.XXNormal
  }
});

export default styles;
