import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, TextInput, ScrollView } from 'react-native';
import { tabDetailProfileScreen, detailProfileForm } from 'constants/data_constants';
import { TabsHorizontal, Form } from 'components/';
import styles from './styles';
import Avatar from './components/Avatar';
import { screenHeight, navbarHeight, MAIN_HEADER_HEIGHT, statusBarHeight } from 'constants/size';
import AccountBank from './components/AccountBank';
import { BACKGROUND_COLOR } from 'constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';
import { Button, Icon } from 'components/';
import { updateUserHandle } from 'actions/user';
import { showCompleteModal } from 'actions/system';
import SCREENS_NAME from 'constants/screens';
import { useNavigation } from '@react-navigation/core';
const DetailProfile = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onChangeTab = useCallback(index => {}, []);
  const refScroll = useRef(null);
  const { user, loading } = useSelector(state => state.user);
  const formData = useMemo(() => {
    const cloneData = cloneDeep(detailProfileForm);
    cloneData.forEach((item, index) => {
      for (const k in user) {
        if (k === item.id) {
          cloneData[index].value = user[k];
        }
      }
      if (item.id === 'address') {
        cloneData[index].value = user?.jobSeeker?.address;
      }
    });
    return cloneData;
  }, [user]);

  const [values, setValues] = useState(() => {
    const result = {};
    formData?.forEach(item => {
      result[item.id] = item;
    });
    return result;
  });

  const onChange = useCallback((id, value) => {
    setValues(prev => {
      return {
        ...prev,
        [id]: { ...prev[id], value: value }
      };
    });
  }, []);

  const onSubmitForm = useCallback(() => {
    const cloneUser = cloneDeep(user);
    if (cloneUser) {
      cloneUser.name = values.name.value || values.name.defaultValue;
      cloneUser.phone = values.phone.value || values.phone.defaultValue;
      cloneUser.gender = values.gender.value || values.gender.defaultValue;
      cloneUser.birthday = values.birthday.value || values.birthday.defaultValue;
      if (cloneUser.jobSeeker) {
        cloneUser.jobSeeker.address = values.address.value || values.address.defaultValue;
      } else {
        cloneUser.jobSeeker = {};
        cloneUser.jobSeeker.address = values.address.value || values.address.defaultValue;
      }
    }
    dispatch(
      updateUserHandle({
        params: cloneUser,
        success: v => {
          dispatch(
            showCompleteModal({
              title: 'Cập nhật thành công',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'Chúc mừng bạn đã cập nhật thông tin thành công',
              buttonTitle: 'Xác nhận',
              onConfirm: () => {
                navigation.navigate(SCREENS_NAME.PROFILE_SCREEN, {});
              },
              onClose: () => {
                navigation.navigate(SCREENS_NAME.PROFILE_SCREEN, {});
              }
            })
          );
        },
        failure: e => {
          dispatch(
            showCompleteModal({
              title: 'Cập nhật không thành thành công',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'Xin kiểm tra lại kết nối hoặc dữ liệu đã nhập',
              buttonTitle: 'Xác nhận',
              onConfirm: () => {},
              onClose: () => {}
            })
          );
        },
        handleErr: e => {
          dispatch(
            showCompleteModal({
              title: 'Lỗi kết nối',
              icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
              content: 'Vui lòng kiểm tra kết nối',
              buttonTitle: 'Xác nhận',
              onConfirm: () => {},
              onClose: () => {}
            })
          );
        }
      })
    );
  }, [user, values]);

  return (
    <View onStartShouldSetResponder={() => Keyboard.dismiss()} style={[styles.container]}>
      <KeyboardAvoidingView enabled behavior="height" style={styles.container}>
        {/* <ScrollView ref={refScroll} showsVerticalScrollIndicator={false}> */}
        {/* <View>
              <TabsHorizontal onPress={onChangeTab} data={tabDetailProfileScreen} />
            </View> */}
        <View style={styles.avatar}>
          <Avatar avatar={user?.avatar} />
        </View>
        <View style={styles.detailProfile}>
          <Form refScroll={refScroll} data={values} onChange={onChange} />
          <Button type="modal" title={'Cập nhật'} submitMethod={onSubmitForm} disable={false} />
        </View>

        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(DetailProfile);
