import React, { memo } from 'react';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import styles from './styles';
import AvatarArea from './components/AvatarArea';
import CovidUpdateButton from './components/CovidUpdateButton';

const ProfileScreen = props => {
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
      </ScrollView>
    </View>
  );
};

export default memo(ProfileScreen);
