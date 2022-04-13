import { BACKGROUND_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import DatePickerStyled from 'react-native-styled-datepicker';
import { Button } from 'components/';

const ModalSelectDate = props => {
  const { isDisplay, onChange, onSubmitChange, onCancelChange, initialModalSelectDate } = props;
  return (
    <Modal style={styles.container} transparent visible={isDisplay}>
      <View style={styles.wrapper} onStartShouldSetResponder={onCancelChange}>
        <View style={styles.content}>
          <DatePickerStyled
            onChange={date => {
              onChange?.(date);
            }}
            initialViewDate={initialModalSelectDate}
          />
          <Button
            type="confirm_reject"
            titleReject={'Huỷ bỏ'}
            titleConfirm={'Xác nhận'}
            containerStyle={styles.button}
            hideRightTitle
            submitMethod={onSubmitChange}
            rejectMethod={onCancelChange}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.modalSystem,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.XXNormal
  },
  content: {
    backgroundColor: BACKGROUND_COLOR.White,
    width: '100%',
    borderRadius: 10
  },
  button: {
    marginVertical: SPACING.Large,
    marginHorizontal: SPACING.XXNormal
  }
});

export default memo(ModalSelectDate);
