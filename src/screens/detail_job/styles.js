import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { SPACING, DEVICE_WIDTH, HEIGHT_BUTTON_BOTTOM } from 'constants/size';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  headerContainerStyle: {
    marginBottom: SPACING.Small
  },
  scrollView: {
    marginBottom: 10
  },
  detailScreen: {
    backgroundColor: BACKGROUND_COLOR.White,
    paddingBottom: HEIGHT_BUTTON_BOTTOM,
    flex: 1
  },
  warningBox: {
    paddingHorizontal: SPACING.XNormal
  },
  jobInfo: {
    paddingHorizontal: SPACING.XNormal
  },
  income: {
    paddingHorizontal: SPACING.XNormal
  },
  jobDesc: {
    paddingHorizontal: SPACING.XNormal
  },
  benefit: {
    paddingHorizontal: SPACING.XNormal
  },
  jobRequire: {
    paddingHorizontal: SPACING.XNormal
  },
  jobContact: {
    paddingHorizontal: SPACING.XNormal
  },
  buttonArea: {
    width: DEVICE_WIDTH,
    position: 'absolute',
    height: HEIGHT_BUTTON_BOTTOM,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBonusContentTitle: {
    paddingVertical: SPACING.XXNormal,
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  modalBonusContentTitleText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading
  },
  modalBonusContentItem: {
    marginTop: SPACING.Large
  },
  modalBonusContentItemTitle: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.BodyText,
    paddingLeft: SPACING.XXNormal
  },
  modalBonusContentItemDetail: {
    marginTop: SPACING.XXNormal
  },
  modalBonusContentItemDetailText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    paddingLeft: SPACING.XXNormal
  },
  modalBonusContentMain: {
    paddingHorizontal: SPACING.XXNormal
  },
  buttonModalArea: {
    paddingHorizontal: SPACING.XXNormal
  },
  successModal: {}
});

export default styles;
