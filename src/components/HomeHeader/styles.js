import { StyleSheet } from 'react-native';
import { paddingHelloHeader, Shadow } from 'constants/stylesCSS';
import { BACKGROUND_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: paddingHelloHeader.paddingVertical,
    paddingHorizontal: paddingHelloHeader.paddingHorizontal,
    backgroundColor: BACKGROUND_COLOR.White,
    marginBottom: SPACING.Small,
    ...Shadow
  },
  logo: {
    width: 50,
    height: 50
  }
});

export default styles;
