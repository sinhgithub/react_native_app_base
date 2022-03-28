import { SPACING } from 'constants/size';
import React, { memo } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Icon } from 'components/';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';
import { CustomInput } from 'components/';

const WithDrawRequestModal = props => {
  return (
    <Modal
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationOutTiming={100}
      transparent>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Tạo yêu cầu rút tiền</Text>
            <Icon name="closecircle" fontName="AntDesign" size={25} color={CUSTOM_COLOR.RedBasic} />
          </View>
          <View style={styles.form}>
            <CustomInput />
            <CustomInput type="select" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1
  },
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    minHeight: '50%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR.White,
    padding: SPACING.XXNormal,
    ...Shadow
  },
  modalTitle: {
    flexDirection: 'row',
    paddingBottom: SPACING.XXNormal,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: CUSTOM_COLOR.BasicGray,
    borderBottomWidth: 1
  },
  modalTitleText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Heading,
    color: TEXT_COLOR.Black
  },
  form: {
    marginTop: SPACING.XXLarge
  }
});

export default memo(WithDrawRequestModal);
