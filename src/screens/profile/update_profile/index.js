import React, { memo, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitleScreen from 'components/HeaderTitleScreen';
import { BACKGROUND_COLOR } from 'constants/colors';
import Form from 'components/Form';
import { Button } from 'components/';
import { sectionProfileType, inputType } from 'constants/data_constants';
import { SPACING } from 'constants/size';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { cloneDeep } from 'lodash';
import { updateUserHandle } from 'actions/user';
import SCREENS_NAME from 'constants/screens';
import { showCompleteModal } from 'actions/system';
import { Icon } from 'components/';

const UpdateProfile = props => {
  const { updateType, titleScreen, itemRoot } = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector(state => state.user);

  const formData = useMemo(() => {
    switch (updateType) {
      case sectionProfileType.update_experience:
        let ArrayItem = [];
        let tmp;
        for (const k in itemRoot) {
          switch (k) {
            case 'companyName':
              tmp = {
                id: k,
                label: 'Tên công ty',
                isKeepValue: true,
                type: inputType.text,
                value: itemRoot[k]
              };
              break;
            case 'description':
              tmp = {
                id: k,
                label: 'Mô tả',
                isKeepValue: true,
                type: inputType.textarea,
                value: itemRoot[k]
              };
              break;
            case 'endDate':
              tmp = {
                id: k,
                label: 'Ngày kết thúc',
                isKeepValue: true,
                type: inputType.date,
                value: itemRoot[k]
              };
              break;
            case 'position':
              tmp = {
                id: k,
                label: 'Vị trí',
                isKeepValue: true,
                type: inputType.text,
                value: itemRoot[k]
              };
              break;
            case 'startDate':
              tmp = {
                id: k,
                label: 'Ngày bắt đầu',
                isKeepValue: true,
                type: inputType.date,
                value: itemRoot[k]
              };
              break;
            default:
              break;
          }
          ArrayItem.push(tmp);
        }
        return ArrayItem;
      case sectionProfileType.update_education:
        let ArrayItemEduCation = [];
        let tmpEduCation;
        for (const k in itemRoot) {
          switch (k) {
            case 'education':
              tmpEduCation = {
                id: k,
                label: 'Trường',
                type: inputType.text,
                value: itemRoot[k]
              };
              break;
            case 'educationStatus':
              tmpEduCation = {
                id: k,
                label: 'Đã tốt nghiệp/ Chưa tốt nghiệp',
                type: inputType.text,
                value: itemRoot[k]
              };
              break;
            case 'majors':
              tmpEduCation = {
                id: k,
                label: 'Ngành học',
                type: inputType.text,
                value: itemRoot[k]
              };
              break;
            default:
              break;
          }
          ArrayItemEduCation.push(tmpEduCation);
        }
        return ArrayItemEduCation;
      default:
        break;
    }
  }, [updateType, itemRoot]);

  const [values, setValues] = useState(() => {
    const result = {};
    formData?.forEach(item => {
      result[item.id] = item;
    });
    return result;
  });

  const titleButton = useMemo(() => {
    switch (updateType) {
      case sectionProfileType.update_experience:
        return 'Cập nhật kinh nghiệm';
      case sectionProfileType.update_education:
        return 'Cập nhật học vấn';
      default:
        break;
    }
  }, [updateType]);

  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderTitleScreen title={`${titleScreen || ''}`} />
    });
  }, [navigation, titleScreen]);

  const onChangeForm = (id, value) => {
    setValues(prev => {
      return {
        ...prev,
        [id]: { ...prev[id], value: value }
      };
    });
  };

  const onSubmitForm = () => {
    const userClone = cloneDeep(user);
    switch (updateType) {
      case sectionProfileType.update_experience:
        let tmp = {};
        for (const k in values) {
          tmp[k] = values[k].value;
        }
        userClone.jobSeeker.workExperience.splice(itemRoot.index, 1, tmp);
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => {
              dispatch(
                showCompleteModal({
                  title: 'Cập nhật thành công',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Chúc mừng bạn đã cập nhật kinh nghiệm thành công',
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
        break;
      case sectionProfileType.update_education:
        let tmpEducation = {};
        for (const k in values) {
          tmpEducation[k] = values[k].value;
        }
        userClone.jobSeeker.education = tmpEducation.education;
        userClone.jobSeeker.educationStatus = tmpEducation.educationStatus;
        userClone.jobSeeker.majors = tmpEducation.majors;
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => {
              dispatch(
                showCompleteModal({
                  title: 'Cập nhật thành công',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Chúc mừng bạn đã cập nhật học vấn thành công',
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
        break;
      default:
        break;
    }
  };

  const disableButton = useMemo(() => {
    switch (updateType) {
      case sectionProfileType.update_experience:
        if (!values.companyName.value || !values.startDate.value) {
          return true;
        }
        return false;
      default:
        break;
    }
  }, [updateType, values]);

  return (
    <View style={styles.profileScreen} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>
        <View>
          <Form data={values} onChange={onChangeForm} />
        </View>
        <View>
          <Button
            type="modal"
            title={titleButton}
            submitMethod={onSubmitForm}
            disable={disableButton}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    paddingHorizontal: SPACING.XXNormal,
    paddingTop: SPACING.Large
  }
});

export default memo(UpdateProfile);
