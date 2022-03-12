import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';
import { ic_logo } from 'assets/images';
import { CUSTOM_COLOR } from 'constants/colors';

const JobContactItem = props => {
  const { data, onPress, containerStyle } = props;
  return (
    <View style={[styles.jobContactItem, containerStyle]} activeOpacity={0.6}>
      <View style={styles.jobContactItemContent}>
        <View style={styles.jobContactItemContentCompany}>
          <View style={styles.logo}>
            <Image source={ic_logo} style={styles.logoImage} />
          </View>
          <Text style={styles.companyName}>{data.contactName}</Text>
        </View>
        <View style={styles.jobContactItemContentIconAction}>
          <TouchableOpacity style={styles.iconAction}>
            <Icon name="new-message" fontName="Entypo" size={20} color={CUSTOM_COLOR.Orange} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconAction, styles.actionPhone]}>
            <Icon name="phone" fontName="AntDesign" size={20} color={CUSTOM_COLOR.Orange} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(JobContactItem);
