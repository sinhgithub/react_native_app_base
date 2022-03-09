import React, { memo } from 'react';
import { View, Text } from 'react-native';

const WorkScreen = props => {
  return (
    <View>
      <Text>Hello work screen</Text>
    </View>
  );
};

export default memo(WorkScreen);
