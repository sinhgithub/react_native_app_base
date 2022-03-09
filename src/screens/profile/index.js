import React, { memo } from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = props => {
  return (
    <View>
      <Text>Hello profile screen</Text>
    </View>
  );
};

export default memo(ProfileScreen);
