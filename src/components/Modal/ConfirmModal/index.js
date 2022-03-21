import { SPACING } from 'constants/size';
import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Button } from 'components/';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import { hideConfirmModal } from 'actions/system';

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const { confirmModal } = useSelector(state => state.system);
  const { title, icon, content, buttonTitleReject, buttonTitleConfirm } = confirmModal;

  const onClose = () => {
    dispatch(hideConfirmModal());
    confirmModal?.onClose?.();
  };

  const onConfirm = () => {
    dispatch(hideConfirmModal());
    confirmModal?.onConfirm?.();
  };

  const onReject = () => {
    dispatch(hideConfirmModal());
    confirmModal?.onReject?.();
  };

  return (
    <View style={styles.modal}>
      <View style={styles.close} onStartShouldSetResponder={onClose} isVisible={true} />
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{title}</Text>
          <TouchableOpacity onPress={onClose}>{icon}</TouchableOpacity>
        </View>
        <Text style={styles.desc}> {content}</Text>
        <Button
          type="confirm_reject"
          titleReject={buttonTitleReject}
          titleConfirm={buttonTitleConfirm}
          containerStyle={styles.button}
          hideRightTitle
          submitMethod={onConfirm}
          rejectMethod={onReject}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: BACKGROUND_COLOR.modalSystem,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: BACKGROUND_COLOR.BasicGray,
    padding: SPACING.XNormal,
    borderRadius: 10,
    maxWidth: '80%',
    zIndex: 1
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headingText: {
    fontSize: FONT_SIZE.BodyText,
    fontFamily: FONT_FAMILY.BOLD,
    color: TEXT_COLOR.RedBasic
  },
  desc: {
    marginTop: SPACING.XNormal,
    fontSize: FONT_SIZE.Heading,
    fontFamily: FONT_FAMILY.REGULAR,
    color: TEXT_COLOR.Black,
    maxWidth: '90%'
  },
  completeText: {
    backgroundColor: 'red'
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'red'
  },
  button: {
    marginTop: 20
  },
  close: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  }
});

export default memo(ConfirmModal);
