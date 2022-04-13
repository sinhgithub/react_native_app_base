import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const JobRequireItem = props => {
  const { containerStyle, icon, title, value } = props;
  return (
    <View style={[styles.jobRequireItem, containerStyle]} activeOpacity={0.6}>
      <View style={styles.jobRequireItemLeft}>
        <View style={styles.jobRequireItemLeftIcon}>{icon}</View>
        <View style={styles.jobRequireItemLeftContent}>
          <Text numberOfLines={1} style={styles.jobRequireItemLeftContentText}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.jobRequireItemLeftContentGray}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(JobRequireItem);
