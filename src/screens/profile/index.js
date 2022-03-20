import React, { memo, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import styles from './styles';
import AvatarArea from './components/AvatarArea';
import CovidUpdateButton from './components/CovidUpdateButton';
import Section from './components/Section';
import { BackgroundTextBox } from 'components/';
import { translate } from 'src/i18n';

const ProfileScreen = props => {
  const onCompleteProfile = useCallback(() => {}, []);
  const onSeeAllAppellation = useCallback(() => {}, []);
  return (
    <View style={styles.profileScreen}>
      <View style={styles.profileScreenHeader}>
        <Header />
      </View>
      <ScrollView style={styles.flex1}>
        <View style={styles.avatarArea}>
          <AvatarArea />
        </View>
        <View style={styles.covidUpdateButton}>
          <CovidUpdateButton />
        </View>
        <View style={[styles.section, styles.mtLittle]}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.appellation')}
            rightTitle={translate('common.see_all')}
            descText={translate('common.appellation_desc')}
            buttonTile={translate('common.complete_profile')}
            onSubmit={onCompleteProfile}
            action={onSeeAllAppellation}
          />
        </View>
        <View style={styles.ranking}>
          <BackgroundTextBox title={translate('common.ranking_board')} />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.experience_on_ttv')}
            descText={translate('common.experience_on_ttv_desc')}
            buttonTile={translate('common.find_job_now')}
            onSubmit={onCompleteProfile}
            action={onSeeAllAppellation}
            hideRightTittle
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.diff_experience')}
            descText={translate('common.diff_experience_desc')}
            buttonTile={translate('common.add_experience')}
            onSubmit={onCompleteProfile}
            action={onSeeAllAppellation}
            hideRightTittle
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.education')}
            descText={translate('common.education_desc')}
            buttonTile={translate('common.add_education')}
            onSubmit={onCompleteProfile}
            action={onSeeAllAppellation}
            hideRightTitle
          />
        </View>
        <View style={styles.section}>
          <Section
            containerStyle={styles.section1}
            leftTitle={translate('common.skill')}
            descText={translate('common.skill_desc')}
            buttonTile={translate('common.add_skill')}
            onSubmit={onCompleteProfile}
            action={onSeeAllAppellation}
            hideRightTitle
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(ProfileScreen);
