import { BACKGROUND_COLOR } from 'constants/colors';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { SPACING } from 'constants/size';
import { CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Button, Icon, Form } from 'components/';
import { formatNumber } from 'helpers/formatNumber';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletWithDrawHandle, withdrawHandle } from 'actions/wallet';
import { showCompleteModal } from 'actions/system';
import { withdrawRequestForm } from 'constants/data_constants';
import { useNavigation } from '@react-navigation/core';

const getHardCodeCompare = item => {
  return `${item?.id?.employer?.companyName}`;
};

const WithDrawRequest = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const wallets = useSelector(state => state.wallets.wallets);
  useEffect(() => {
    dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getWalletWithDrawHandle({ callback: () => {}, failure: () => {} }));
    });
    return () => {
      focusListener();
    };
  }, []);

  const [values, setValues] = useState(null);
  const [walletSelected, setWalletSelected] = useState(null);
  const selectInputData = useMemo(() => {
    const result = [];
    wallets.forEach(item => {
      result.push(`${item.id.employer.companyName} - ${formatNumber(item.total, ',')} VND`);
    });
    return result;
  }, [wallets]);

  const onSelectWallet = (selectedItem, index) => {
    const selected = wallets.find(item => {
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
            dispatch(
              showCompleteModal({
                title: 'Gởi yêu cầu thành công!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content:
                  'Bạn đã gởi yêu cầu rút tiền thành công, Yêu cầu của bạn sẽ được xử lý từ 30 - 60 phút',
                buttonTitle: 'Xác nhận',
                onConfirm: () => {
                  navigation.goBack();
                },
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
