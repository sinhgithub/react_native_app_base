import React, { memo, useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import styles from './styles';
import AvatarArea from './components/AvatarArea';
import Section from './components/Section';
import { translate } from 'src/i18n';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import SCREENS_NAME from 'constants/screens';
import { sectionProfileType, titleUpdateProfile } from 'constants/data_constants';
import { getUserHandle, updateUserHandle } from 'actions/user';
import { cloneDeep } from 'lodash';
import { getListProvinceHandle } from 'actions/master_data';
import Button from 'components/Button';
import { logout } from 'actions/auth';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from 'services/api/upload';
const ProfileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { memberInfo } = useSelector(state => state.auth);

  const { user } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(getUserHandle({}));
    dispatch(getListProvinceHandle({}));
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getUserHandle({}));
    });
    return () => {
      focusListener();
    };
  }, [dispatch, navigation]);

  console.log(user, 'useruser');

  const onEdit = (item, type, index) => {
    switch (type) {
      case sectionProfileType.update_experience:
        navigation.navigate(SCREENS_NAME.UPDATE_PROFILE_SCREEN, {
          updateType: sectionProfileType.update_experience,
          titleScreen: titleUpdateProfile.update_experience,
          itemRoot: { ...item, index }
        });
        break;
      case sectionProfileType.update_education:
        navigation.navigate(SCREENS_NAME.UPDATE_PROFILE_SCREEN, {
          updateType: sectionProfileType.update_education,
          titleScreen: titleUpdateProfile.update_education,
          itemRoot: item
        });
        break;
      default:
        break;
    }
  };

  const onDelete = (item, type, index) => {
    const userClone = cloneDeep(user);
    switch (type) {
      case sectionProfileType.update_experience:
        userClone.jobSeeker.workExperience.splice(index, 1);
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => dispatch(getUserHandle({})),
            failure: e => {
              console.log(e);
            },
            handleErr: e => {
              console.log(e);
            }
          })
        );
        break;
      case sectionProfileType.update_education:
        userClone.jobSeeker.education = null;
        userClone.jobSeeker.educationStatus = null;
        userClone.jobSeeker.majors = null;
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => dispatch(getUserHandle({})),
            failure: e => {
              console.log(e);
            },
            handleErr: e => {
              console.log(e);
            }
          })
        );
        break;
      case sectionProfileType.update_skill:
        userClone.jobSeeker.skill.splice(index, 1);
        dispatch(
          updateUserHandle({
            params: userClone,
            success: v => dispatch(getUserHandle({})),
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

  const onPressButtonSection = useCallback(
    sectionType => {
      switch (sectionType) {
        case sectionProfileType.complete_profile:
          navigation.navigate(SCREENS_NAME.DETAIL_PROFILE_SCREEN, {});
          break;
        case sectionProfileType.update_experience:
          navigation.navigate(SCREENS_NAME.ADD_PROFILE_SCREEN, {
            addType: sectionProfileType.add_experience,
            titleScreen: titleUpdateProfile.add_experience
          });
          break;
        case sectionProfileType.update_education:
          navigation.navigate(SCREENS_NAME.ADD_PROFILE_SCREEN, {
            addType: sectionProfileType.add_education,
            titleScreen: titleUpdateProfile.add_education
          });
          break;
        case sectionProfileType.update_skill:
          navigation.navigate(SCREENS_NAME.ADD_PROFILE_SCREEN, {
            addType: sectionProfileType.add_skill,
            titleScreen: titleUpdateProfile.add_skill
          });
          break;
        default:
          break;
      }
    },
    [navigation]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout({}));
  }, [dispatch]);

  const onSeeAllAppellation = useCallback(() => {}, []);

  const onViewDetail = useCallback(() => {
    navigation.navigate(SCREENS_NAME.DETAIL_PROFILE_SCREEN, {});
  }, [navigation]);
  const onChangeAvatar = useCallback(() => {
    launchImageLibrary({ noData: true }, async response => {
      if (response) {
        const callBack = response => {
          dispatch(
            updateUserHandle({
              params: { ...user, avatar: response.data },
              success: v => dispatch(getUserHandle({})),
              failure: e => {
                console.log(e);
              },
              handleErr: e => {
                console.log(e);
              }
            })
          );
        };
        uploadImage(response?.assets?.[0], callBack);
      }
    });
  }, []);

  return (
    <View style={styles.profileScreen}>
      <View style={styles.profileScreenHeader}>
        <Header onPress={onViewDetail} />
      </View>
      <ScrollView style={styles.flex1}>
        <View style={styles.avatarArea}>
          <AvatarArea onChangeAvatar={onChangeAvatar} />
        </View>
        <View style={[styles.section, styles.mtLittle]}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.appellation')}
            rightTitle={translate('common.see_all')}
            descText={translate('common.appellation_desc')}
            buttonTile={translate('common.complete_profile')}
            action={onSeeAllAppellation}
            onPressButton={onPressButtonSection}
            type={sectionProfileType.complete_profile}
            key={1}
            hideRightTittle
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.experience')}
            descText={translate('common.diff_experience_desc')}
            buttonTile={translate('common.add_experience')}
            hideRightTittle
            onPressButton={onPressButtonSection}
            type={sectionProfileType.update_experience}
            data={user?.jobSeeker?.workExperience}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.education')}
            descText={translate('common.education_desc')}
            buttonTile={translate('common.add_education')}
            hideRightTitle
            onPressButton={onPressButtonSection}
            data={{
              education: user?.jobSeeker?.education,
              educationStatus: user?.jobSeeker?.educationStatus,
              majors: user?.jobSeeker?.majors
            }}
            key={2}
            type={sectionProfileType.update_education}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.skill')}
            descText={translate('common.skill_desc')}
            buttonTile={translate('common.add_skill')}
            hideRightTitle
            onPressButton={onPressButtonSection}
            data={user?.jobSeeker?.skill}
            type={sectionProfileType.update_skill}
            key={3}
            onDelete={onDelete}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button submitMethod={handleLogout} type="modal" title="Đăng xuất" />
      </View>
    </View>
  );
};

export default memo(ProfileScreen);
