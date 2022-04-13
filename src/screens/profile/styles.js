import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/size';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  profileScreen: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White
  },
  profileScreenHeader: {
    paddingHorizontal: SPACING.XXNormal
  },
  avatarArea: {
    paddingHorizontal: SPACING.XXNormal,
    paddingVertical: SPACING.XNormal,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  covidUpdateButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.XNormal,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  section: {
    marginTop: 60
  },
  mtLittle: {
    marginTop: 10
  },
  section1: {
    paddingHorizontal: SPACING.XXNormal
  },
  ranking: {
    marginTop: SPACING.Large,
    paddingHorizontal: SPACING.XXNormal
  }
});

export default styles;
