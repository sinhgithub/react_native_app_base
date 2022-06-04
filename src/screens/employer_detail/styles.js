import { StyleSheet } from 'react-native';
import { TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { scale } from 'utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: SPACING.XXNormal,
    paddingHorizontal: SPACING.Normal
  },
  bannerWrapper: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'gray'
  },
  banner: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: scale(60),
    height: scale(60),
    borderRadius: 30,
    position: 'absolute',
    left: 15,
    bottom: -30,
    backgroundColor: 'red'
  },
  employerJobs: {
    marginTop: 20
  },
  employerDesc: {},
  employerJobsTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    color: 'black',
    marginBottom: 10
  },
  employerDescText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.Small,
    color: 'black',
    lineHeight: LINE_HEIGHT.Small
  },
  employerInfo: {
    marginTop: 50
  },
  employerInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  employerInfoItemText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: 'black',
    marginLeft: 8
  },
  qrCode: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  employerInfoItemIcon: {
    width: 35,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default styles;
