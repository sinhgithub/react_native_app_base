import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, KeyboardAvoidingView, Keyboard } from 'react-native';
import { detailProfileForm } from 'constants/data_constants';
import { Form } from 'components/';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';
import { Button, Icon } from 'components/';
import { updateUserHandle } from 'actions/user';
import { showCompleteModal } from 'actions/system';
import SCREENS_NAME from 'constants/screens';
import { useNavigation } from '@react-navigation/core';
import { getListDistrictHandle } from 'actions/master_data';
const DetailProfile = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refScroll = useRef(null);
  const { user } = useSelector(state => state.user);
  const [showSelectDateModal, setShowSelectDateModal] = useState(false);
  const provinces = useSelector(state => state?.masterData?.provinces);
  const districts = useSelector(state => state?.masterData?.districts);
  const formData = useMemo(() => {
    const cloneData = cloneDeep(detailProfileForm);
    cloneData?.forEach((item, index) => {
      for (const k in user) {
        if (k === item.id) {
          cloneData[index].value = user[k];
        }
      }
      if (item.id === 'address') {
        cloneData[index].value = user?.jobSeeker?.address;
      }
      if (item.id === 'district') {
        cloneData[index].value = user?.jobSeeker?.district?.id;
      }
      if (item.id === 'province') {
        cloneData[index].value = user?.jobSeeker?.province?.id;
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

  const onChange = useCallback(
    (id, value, type) => {
      if (type === 'province') {
        let idSelected;
        Object.values(provinces)?.forEach(item => {
          if (item.name === id) {
            idSelected = item.id;
          }
        });
        setValues(prev => ({ ...prev, province: { ...values.province, value: idSelected } }));
      } else if (type === 'district') {
        let idSelected;
        Object.values(districts)?.forEach(item => {
          if (item.name === id) {
            idSelected = item.id;
          }
        });
        setValues(prev => ({ ...prev, district: { ...values.district, value: idSelected } }));
      } else {
        setValues(prev => {
          return {
            ...prev,
            [id]: { ...prev[id], value: value }
          };
        });
      }
    },
    [districts, provinces, values.district, values.province]
  );
  const [listDistrictDefault, setListDistrictDefault] = useState([]);

  // const provinceInit = useMemo(() => {
  //   return user?.jobSeeker?.province?.id || null;
  // }, [user]);

  const [provinceDefault, setProvinceDefault] = useState(null);

  useEffect(() => {
    if (values?.province?.value) {
      setProvinceDefault(values?.province?.value);
    }
  }, [dispatch, values?.province?.value]);

  useEffect(() => {
    if (provinceDefault) {
      dispatch(
        getListDistrictHandle({
          params: provinceDefault,
          success: res => {
            if (res) {
              const list = [];
              Object.values(res).forEach(item => {
                list.push(item.name);
              });
              setListDistrictDefault(list);
            }
          },
          failure: () => {},
          handleErr: () => {}
        })
      );
    }
  }, [dispatch, provinceDefault]);

  const onSubmitForm = useCallback(() => {
    const cloneUser = cloneDeep(user);
    if (cloneUser) {
      cloneUser.name = values.name.value || values.name.defaultValue;
      cloneUser.phone = values.phone.value || values.phone.defaultValue;
      cloneUser.gender =
        typeof values.gender.value === 'number' ? values.gender.value : values.gender.defaultValue;
      cloneUser.birthday = values.birthday.value || values.birthday.defaultValue;
      if (cloneUser?.jobSeeker) {
        cloneUser.jobSeeker.address = values.address.value || values.address.defaultValue;
      } else {
        cloneUser.jobSeeker = {};
        cloneUser.jobSeeker.address = values.address.value || values.address.defaultValue;
      }
      if (cloneUser?.employer) {
        cloneUser.employer.province = Object.values(provinces)?.find(
          item => item.id === values?.province?.value
        );
        cloneUser.employer.provinceId = Object.values(provinces)?.find(
          item => item.id === values?.province?.value
        ).id;
        cloneUser.employer.district = Object.values(districts)?.find(
          item => item.id === values?.district?.value
        );
        cloneUser.employer.districtId = Object.values(districts)?.find(
          item => item.id === values?.district?.value
        ).id;
        cloneUser.employer.district.provinceId = cloneUser.employer.province.id;
      } else if (provinces && districts) {
        cloneUser.employer = {};
        cloneUser.employer.province = Object.values(provinces)?.find(
          item => item.id === values?.province?.value
        );
        cloneUser.employer.provinceId = Object.values(provinces)?.find(
          item => item.id === values?.province?.value
        ).id;
        cloneUser.employer.district = Object.values(districts)?.find(
          item => item.id === values?.district?.value
        );
        cloneUser.employer.districtId = Object.values(districts)?.find(
          item => item.id === values?.district?.value
        ).id;
        cloneUser.employer.district.provinceId = cloneUser.employer.province.id;
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
        <View style={styles.detailProfile}>
          <Form
            refScroll={refScroll}
            data={values}
            onChange={onChange}
            showSelectDateModal={showSelectDateModal}
            setShowSelectDateModal={setShowSelectDateModal}
            valueProvinceChanged={values.province.value}
            listDistrictDefault={listDistrictDefault}
          />
          <Button type="modal" title={'Cập nhật'} submitMethod={onSubmitForm} disable={false} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(DetailProfile);
