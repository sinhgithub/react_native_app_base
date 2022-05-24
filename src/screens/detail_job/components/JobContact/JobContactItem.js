import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';
import { CUSTOM_COLOR } from 'constants/colors';
import FastImage from 'react-native-fast-image';

const JobContactItem = props => {
  const { data, onPress, containerStyle } = props;
  return (
    <View style={[styles.jobContactItem, containerStyle]} activeOpacity={0.6}>
      <View style={styles.jobContactItemContent}>
        <View style={styles.jobContactItemContentCompany}>
          <View style={styles.logo}>
            <FastImage
              source={{ uri: data.contactLogo }}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.companyName}>{data.contactName}</Text>
        </View>
        <View style={styles.jobContactItemContentIconAction}>
          <TouchableOpacity style={styles.iconAction} onPress={() => onPress?.('sendMessage')}>
            <Icon
              name="message-square"
              fontName="Feather"
              size={20}
              color={CUSTOM_COLOR.RedBasic}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconAction, styles.actionPhone]}
            onPress={() => onPress?.('contact')}>
            <Icon name="phone" fontName="AntDesign" size={20} color={CUSTOM_COLOR.RedBasic} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(JobContactItem);
