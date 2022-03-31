import React, { memo, useCallback, useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import styles from './styles';
import AvatarArea from './components/AvatarArea';
import Section from './components/Section';
import { translate } from 'src/i18n';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import SCREENS_NAME from 'constants/screens';
import {
  sectionProfileType,
  titleUpdateProfile,
  editExperienceForm
} from 'constants/data_constants';
import { getUserHandle } from 'actions/user';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user, loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserHandle({}));
  }, [dispatch]);

  const onEdit = (item, type) => {
    switch (type) {
      case sectionProfileType.update_experience:
        navigation.navigate(SCREENS_NAME.UPDATE_PROFILE_SCREEN, {
          updateType: sectionProfileType.update_experience,
          titleScreen: titleUpdateProfile.update_experience,
          itemRoot: item
        });
        break;
      default:
        break;
    }
  };

  const onPressButtonSection = useCallback(
    sectionType => {
      switch (sectionType) {
        case sectionProfileType.complete_profile:
          navigation.navigate(SCREENS_NAME.UPDATE_PROFILE_SCREEN, {
            updateType: titleUpdateProfile.complete_profile
          });
          break;
        case sectionProfileType.update_experience:
          navigation.navigate(SCREENS_NAME.UPDATE_PROFILE_SCREEN, {
            updateType: titleUpdateProfile.experience
          });
          break;
        default:
          break;
      }
    },
    [navigation]
  );

  const onSeeAllAppellation = useCallback(() => {}, []);

  const onViewDetail = useCallback(() => {
    navigation.navigate(SCREENS_NAME.DETAIL_PROFILE_SCREEN, {});
  }, [navigation]);

  return (
    <View style={styles.profileScreen}>
      <View style={styles.profileScreenHeader}>
        <Header onPress={onViewDetail} />
      </View>
      <ScrollView style={styles.flex1}>
        <View style={styles.avatarArea}>
          <AvatarArea />
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
          />
        </View>
        {/* <View style={styles.ranking}>
          <BackgroundTextBox title={translate('common.ranking_board')} />
        </View> */}
        {/* <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.experience_on_ttv')}
            descText={translate('common.experience_on_ttv_desc')}
            buttonTile={translate('common.find_job_now')}
            hideRightTittle
            onPressButton={onPressButtonSection}
            type="find_job_now"
          />
        </View> */}
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
            data={user?.jobSeeker}
            key={2}
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
            key={3}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(ProfileScreen);
