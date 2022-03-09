import React, { memo } from 'react';
import { View, Text } from 'react-native';

const MessageBoxScreen = props => {
  return (
    <View>
      <Text>Hello message box screen</Text>
    </View>
  );
};

export default memo(MessageBoxScreen);
