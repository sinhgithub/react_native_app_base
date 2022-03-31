import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { translate } from 'src/i18n';
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

const UpdateProfile = props => {
  const { updateType, titleScreen, itemRoot } = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user, loading } = useSelector(state => state.user);
  console.log(user, 'useruser');

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
        return 'Cập nhật';
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
    const useClone = cloneDeep(user);
    switch (updateType) {
      case sectionProfileType.update_experience:
        useClone.jobSeeker.workExperience = [];
        dispatch(
          updateUserHandle({
            params: useClone,
            success: v => console.log(v),
            failure: e => {
              console.log(e);
            },
            handleErr: e => {
              console.log(e);
            }
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.profileScreen} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>
        <View>
          <Form data={values} onChange={onChangeForm} />
        </View>
        <View>
          <Button type="modal" title={titleButton} submitMethod={onSubmitForm} disable={false} />
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
