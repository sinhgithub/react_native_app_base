import { StyleSheet } from 'react-native';

import { MAIN_HEADER_HEIGHT, SPACING } from 'constants/size';

import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';

import { BACKGROUND_COLOR, TEXT_COLOR, CUSTOM_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White
  },
  contentWrapper: {
    flex: 1
  }
});

export default styles;
