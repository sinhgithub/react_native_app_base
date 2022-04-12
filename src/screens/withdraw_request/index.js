import { BACKGROUND_COLOR } from 'constants/colors';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Button, Icon, Form } from 'components/';
import { formatNumber } from 'helpers/formatNumber';
import { useDispatch } from 'react-redux';
import { withdrawHandle } from 'actions/wallet';
import { showCompleteModal } from 'actions/system';
import { withdrawRequestForm } from 'constants/data_constants';

const getHardCodeCompare = item => {
  return `${item?.id?.employer?.companyName} ( ${formatNumber(item?.balance, ',')} VND )`;
};

const WithDrawRequest = props => {
  const dispatch = useDispatch();
  const { data } = props?.route?.params;

  const [values, setValues] = useState(null);
  const [walletSelected, setWalletSelected] = useState(null);
  const selectInputData = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.map(item => getHardCodeCompare(item));
  }, [data]);

  const onSelectWallet = (selectedItem, index) => {
    console.log(selectedItem, 'selectedItemselectedItem');
    const selected = data.find(item => {
      const compare = getHardCodeCompare(item);
      if (selectedItem === compare) {
        return item;
      }
    });
    setWalletSelected(selected);
    onChangeValue('employerId', selected?.id?.employer?.id);
  };

  const onChangeValue = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const isDisableButton = useMemo(() => {
    if (
      !values?.employerId ||
      !values?.withdrawalAmount ||
      walletSelected?.balance < values?.withdrawalAmount ||
      values?.withdrawalAmount <= 0
    ) {
      return true;
    }
    return false;
  }, [values]);

  const onWithdraw = useCallback(() => {
    if (!isDisableButton) {
      dispatch(
        withdrawHandle({
          params: values,
          success: () => {
            console.log('Gởi yêu cầu thành công!');
            dispatch(
              showCompleteModal({
                title: 'Gởi yêu cầu thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content:
                  'Bạn đã gởi yêu cầu rút tiền thành công, Yêu cầu của bạn sẽ được xử lý từ 30 - 60 phút',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
                onClose: () => {}
              })
            );
          },
          failure: () => {
            dispatch(
              showCompleteModal({
                title: 'Gởi yêu cầu không thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Xin vui lòng kiểm tra lại!',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
                onClose: () => {}
              })
            );
          },
          handleErr: () => {
            dispatch(
              showCompleteModal({
                title: 'Lỗi kết nối',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Xin vui lòng kiểm tra lại!',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {},
                onClose: () => {}
              })
            );
          }
        })
      );
    }
  }, [dispatch, isDisableButton, values]);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <View style={styles.content}>
        <View style={styles.form}>
          {/* <CustomInput type="select" label="Ví" data={selectInputData} onChange={onSelectWallet} />
          <CustomInput
            autoCapitalize="none"
            type="text"
            label="Số tiền cần rút"
            keyboardType="numeric"
            keyInput="withdrawalAmount"
            onChange={onChangeValue}
            placeholder="Nhập số tiền cần rút"
          /> */}
          <Form
            data={withdrawRequestForm}
            dataInputSelect={selectInputData}
            onSelect={onSelectWallet}
            onChange={onChangeValue}
          />
          <Button
            type="modal"
            title={'Xác nhận'}
            submitMethod={onWithdraw}
            disable={isDisableButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White
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
    marginTop: SPACING.XXLarge,
    paddingHorizontal: SPACING.XXNormal
  }
});

export default memo(WithDrawRequest);
