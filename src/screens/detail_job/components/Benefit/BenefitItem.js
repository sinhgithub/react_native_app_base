import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'components/';

const BenefitItem = props => {
  const { bonusName, bonusDesc, containerStyle, onPress, data, isBonus } = props;
  if (isBonus) {
    return (
      <TouchableOpacity
        style={[styles.benefitItem, containerStyle]}
        onPress={() => onPress(data)}
        activeOpacity={0.6}>
        <View style={styles.benefitItemLeft}>
          {bonusName ? (
            <View style={styles.benefitItemLeftIcon}>
              <Icon fontName="FontAwesome" size={15} name="star" color="black" />
            </View>
          ) : null}
          <View style={styles.benefitItemLeftContent}>
            {bonusName ? (
              <Text numberOfLines={1} style={styles.benefitItemLeftContentText}>
                {bonusName}
              </Text>
            ) : null}
            {bonusDesc ? (
              <Text numberOfLines={1} style={styles.benefitItemLeftContentGray}>
                {bonusDesc}
              </Text>
            ) : null}
          </View>
        </View>
        {bonusName ? (
          <View style={styles.benefitItemRight}>
            <Icon fontName="Entypo" size={25} name="dots-three-horizontal" color="gray" />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity>
        <Text numberOfLines={1} style={[styles.benefitItemLeftContentGray, { paddingBottom: 8 }]}>
          {data?.[0]}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default memo(BenefitItem);
