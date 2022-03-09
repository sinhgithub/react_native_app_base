import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TitleSection = props => {
  const { title, containerStyle, titleStyle } = props;
  return (
    <View style={[styles.titleSection, containerStyle]}>
      <Text style={[styles.titleSectionText, titleStyle]}>{title}</Text>
    </View>
  );
};

export default memo(TitleSection);
