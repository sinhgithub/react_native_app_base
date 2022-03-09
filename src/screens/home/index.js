import React, { memo, useCallback, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>hello home</Text>
    </View>
  );
};

export default memo(HomeScreen);
