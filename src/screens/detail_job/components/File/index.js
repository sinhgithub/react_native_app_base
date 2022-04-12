import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const File = props => {
  return (
    <View>
      <Text>hello component</Text>
    </View>
  );
};

export default memo(File);
