import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { translate } from 'src/i18n';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitleScreen from 'components/HeaderTitleScreen';
import { BACKGROUND_COLOR } from 'constants/colors';
import Form from 'components/Form';
import { Button } from 'components/';
import {
  sectionProfileType,
  addExperienceForm,
  inputType,
  addEducationForm,
  addSkillForm
} from 'constants/data_constants';
import { SPACING } from 'constants/size';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { cloneDeep } from 'lodash';
import { getSkillCriteriaHandle, getUserHandle, updateUserHandle } from 'actions/user';
import SCREENS_NAME from 'constants/screens';
import { showCompleteModal, showConfirmModal } from 'actions/system';
import { Icon } from 'components/';

const AddProfileScreen = props => {
  const { addType, titleScreen } = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user, loading, loadingSkills, skills } = useSelector(state => state.user);

  useEffect(() => {
    if (addType === sectionProfileType.add_skill) {
      dispatch(
        getSkillCriteriaHandle({ success: () => {}, failure: () => {}, handleErr: () => {} })
      );
    }
  }, [addType, dispatch]);

  const dataInputSelect = useMemo(() => {
    const result = [];
    if (skills?.length > 0) {
      skills.sort((a, b) => a.id - b.id).forEach(item => result.push(item.name));
    }
    return result;
  }, [skills]);

  const formData = useMemo(() => {
    switch (addType) {
      case sectionProfileType.add_experience:
        return addExperienceForm;
      case sectionProfileType.add_education:
        return addEducationForm;
      case sectionProfileType.add_skill:
        return addSkillForm;
      default:
        break;
    }
  }, [addType]);

  const [values, setValues] = useState(() => {
    const result = {};
    formData?.forEach(item => {
      result[item.id] = item;
    });
    return result;
  });

  const titleButton = useMemo(() => {
    switch (addType) {
      case sectionProfileType.add_experience:
        return 'Thêm kinh nghiệm';
      case sectionProfileType.add_education:
        return 'Thêm học vấn';
      case sectionProfileType.add_skill:
        return 'Thêm kỹ năng';
      default:
        break;
    }
  }, [addType]);

  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderTitleScreen title={`${titleScreen || ''}`} />
    });
  }, [navigation, titleScreen]);

  const onChangeForm = (id, value, mode = inputType.text) => {
    if (addType === sectionProfileType.add_skill) {
      if (mode === inputType.select) {
        setValues(prev => {
          return {
            ...prev,
            skill: {
              ...prev.skill,
              idTmp: value + 1,
              type: inputType.select,
              value: id
            }
          };
        });
      } else {
        setValues(prev => {
          return {
            ...prev,
            [id]: { ...prev[id], value }
          };
        });
      }
    } else {
      setValues(prev => {
        return {
          ...prev,
          [id]: { ...prev[id], value: value }
        };
      });
    }
  };

  const disableButton = useMemo(() => {
    switch (addType) {
      case sectionProfileType.add_experience:
        if (!values.companyName.value || !values.startDate.value) {
          return true;
        }
        return false;
      case sectionProfileType.add_education:
        if (!values.education.value || !values.educationStatus.value) {
          return true;
        }
        return false;
      case sectionProfileType.add_skill:
        // if (!values.education.value || !values.educationStatus.value) {
        //   return true;
        // }
        return false;
      default:
        break;
    }
  }, [addType, values]);

  const onSubmitForm = () => {
    const userClone = cloneDeep(user);
    switch (addType) {
      case sectionProfileType.add_experience:
        let tmp = {};
        for (const k in values) {
          tmp[k] = values[k].value;
        }
        if (
          !userClone?.jobSeeker?.workExperience ||
          userClone?.jobSeeker?.workExperience?.length <= 0
        ) {
          userClone.jobSeeker.workExperience = [tmp];
        } else {
          userClone.jobSeeker.workExperience.push(tmp);
        }
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => {
              dispatch(
                showConfirmModal({
                  title: 'Thêm thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Chúc mừng bạn đã thêm kinh nghiệm thành công',
                  buttonTitleReject: 'Trở lại',
                  buttonTitleConfirm: 'Thêm tiếp',
                  onConfirm: () => {
                    console.log('Chúc mừng bạn đã thêm kinh nghiệm thành công');
                    dispatch(
                      getUserHandle({ callback: () => {}, handleErr: () => {}, failure: () => {} })
                    );
                    const cloneValues = cloneDeep(values);
                    for (const k in cloneValues) {
                      cloneValues[k].value = '';
                    }
                    setValues(cloneValues);
                  },
                  onClose: () => {
                    // do no thing
                  },
                  onReject: () => {
                    navigation.navigate(SCREENS_NAME.PROFILE_SCREEN, {});
                  }
                })
              );
            },
            failure: e => {
              dispatch(
                showCompleteModal({
                  title: 'Thêm không thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {},
                  onClose: () => {}
                })
              );
            },
            handleErr: e => {
              dispatch(
                showCompleteModal({
                  title: 'Lỗi kết nối!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {},
                  onClose: () => {}
                })
              );
            }
          })
        );
        break;
      case sectionProfileType.add_education:
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
                  title: 'Thêm thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Bạn đã cập nhật học vấn thành công',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {
                    navigation.navigate(SCREENS_NAME.PROFILE_SCREEN, {});
                  },
                  onClose: () => {}
                })
              );
            },
            failure: e => {
              dispatch(
                showCompleteModal({
                  title: 'Thêm không thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {},
                  onClose: () => {}
                })
              );
            },
            handleErr: e => {
              dispatch(
                showCompleteModal({
                  title: 'Lỗi kết nối!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {},
                  onClose: () => {}
                })
              );
            }
          })
        );
        break;
      case sectionProfileType.add_skill:
        let tmpSkill = {};
        for (const k in values) {
          if (k === 'skill') {
            tmpSkill['name'] = values[k].value;
            tmpSkill['id'] = values[k].idTmp;
          } else {
            tmpSkill[`${k}`] = values[k].value;
          }
        }
        if (!userClone?.jobSeeker?.skill || userClone?.jobSeeker?.skill?.length <= 0) {
          userClone.jobSeeker.skill = [tmpSkill];
        } else {
          userClone.jobSeeker.skill.push(tmpSkill);
        }
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => {
              dispatch(
                showConfirmModal({
                  title: 'Thêm thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Chúc mừng bạn đã thêm kỹ năng thành công',
                  buttonTitleReject: 'Trở lại',
                  buttonTitleConfirm: 'Thêm tiếp',
                  onConfirm: () => {
                    dispatch(
                      getUserHandle({ callback: () => {}, handleErr: () => {}, failure: () => {} })
                    );
                    const cloneValues = cloneDeep(values);
                    for (const k in cloneValues) {
                      cloneValues[k].value = '';
                    }
                    setValues(cloneValues);
                  },
                  onClose: () => {
                    // do no thing
                  },
                  onReject: () => {
                    navigation.navigate(SCREENS_NAME.PROFILE_SCREEN, {});
                  }
                })
              );
            },
            failure: e => {
              dispatch(
                showCompleteModal({
                  title: 'Thêm không thành công!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
                  buttonTitle: 'Xác nhận',
                  onConfirm: () => {},
                  onClose: () => {}
                })
              );
            },
            handleErr: e => {
              dispatch(
                showCompleteModal({
                  title: 'Lỗi kết nối!',
                  icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
                  content: 'Xin vui lòng kiểm tra lại',
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

  return (
    <View style={styles.addProfileScreen} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Form
            data={values}
            onChange={onChangeForm}
            defaultTextSelect="Chọn kỹ năng"
            dataInputSelect={dataInputSelect}
          />
          <View>
            <Button
              type="modal"
              title={titleButton}
              submitMethod={onSubmitForm}
              disable={disableButton}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  addProfileScreen: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    paddingTop: SPACING.Large,
    paddingHorizontal: SPACING.XXNormal
  }
});

export default memo(AddProfileScreen);
