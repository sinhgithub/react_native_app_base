import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';

const BenefitItem = props => {
  const { bonusName, bonusDesc, containerStyle, onPress, data } = props;
  return (
    <TouchableOpacity
      style={[styles.benefitItem, containerStyle]}
      onPress={() => onPress(data)}
      activeOpacity={0.6}>
      <View style={styles.benefitItemLeft}>
        {bonusName && (
          <View style={styles.benefitItemLeftIcon}>
            <Icon fontName="FontAwesome" size={15} name="star" color="black" />
          </View>
        )}
        <View style={styles.benefitItemLeftContent}>
          <Text numberOfLines={1} style={styles.benefitItemLeftContentText}>
            {bonusName}
          </Text>
          <Text numberOfLines={1} style={styles.benefitItemLeftContentGray}>
            {bonusDesc}
          </Text>
        </View>
      </View>
      {bonusName && (
        <View style={styles.benefitItemRight}>
          <Icon fontName="Entypo" size={25} name="dots-three-horizontal" color="gray" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(BenefitItem);
