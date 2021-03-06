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
import { cloneDeep } from 'lodash';

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
      result.push(`${item.id.employer.companyName} : ${formatNumber(item.total, ',')} VND`);
    });
    return result;
  }, [wallets]);

  const onSelectWallet = (selectedItem, index) => {
    const selected = wallets.find(item => {
      const compare = getHardCodeCompare(item);
      const tmp = selectedItem?.split(':');
      if (tmp[0]?.trim() === compare) {
        return item;
      }
    });
    setWalletSelected(selected);
    onChangeValue('employerId', selected?.id?.employer?.id);
  };

  const onChangeValue = (key, value) => {
    let tmpValue = value;
    if (key === 'withdrawalAmount') {
      tmpValue = tmpValue.split(',').join('');
    }
    setValues(prev => ({ ...prev, [key]: formatNumber(tmpValue, ',') }));
  };

  const isDisableButton = useMemo(() => {
    if (
      !values?.employerId ||
      !values?.withdrawalAmount ||
      walletSelected?.balance < parseInt(values?.withdrawalAmount.split(',').join('')) ||
      parseInt(values?.withdrawalAmount.split(',').join('')) <= 0
    ) {
      return true;
    }
    return false;
  }, [values?.employerId, values?.withdrawalAmount, walletSelected?.balance]);

  const onWithdraw = useCallback(() => {
    if (!isDisableButton) {
      const cloneValues = cloneDeep(values);
      for (const k in values) {
        if (k === 'withdrawalAmount') {
          cloneValues[k] = values[k].split(',').join('');
        }
      }
      dispatch(
        withdrawHandle({
          params: cloneValues,
          success: () => {
            dispatch(
              showCompleteModal({
                title: 'G???i y??u c???u th??nh c??ng!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content:
                  'B???n ???? g???i y??u c???u r??t ti???n th??nh c??ng, Y??u c???u c???a b???n s??? ???????c x??? l?? t??? 30 - 60 ph??t',
                buttonTitle: 'X??c nh???n',
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
                title: 'G???i y??u c???u kh??ng th??nh c??ng!',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Xin vui l??ng ki???m tra l???i!',
                buttonTitle: 'X??c nh???n',
                onConfirm: () => {},
                onClose: () => {}
              })
            );
          },
          handleErr: () => {
            dispatch(
              showCompleteModal({
                title: 'L???i k???t n???i',
                icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                content: 'Xin vui l??ng ki???m tra l???i!',
                buttonTitle: 'X??c nh???n',
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
            values={values}
          />
          <Button
            type="modal"
            title={'X??c nh???n'}
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
