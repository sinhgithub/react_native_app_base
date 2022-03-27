import React from 'react';
import LoginScreen from 'screens/auth/login';
import { createStackNavigator } from '@react-navigation/stack';
import { add, interpolate } from 'react-native-reanimated';
import SCREENS_NAME from 'constants/screens';

const AuthStack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 2000,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.2, 0.7, 1]
    })
  }
});

const forHeaderFade = ({ current, next }) => {
  const opacity = interpolate(add(current.progress, next ? next.progress : 0), {
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity }
  };
};

const screenOptions = {
  // header: headerProps => <BackHeader {...headerProps} />,
  cardOverlayEnabled: true,
  transitionSpec: {
    open: config,
    close: config
  },
  gestureEnabled: false,
  cardStyleInterpolator: forFade,
  headerStyleInterpolator: forHeaderFade
};

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName={SCREENS_NAME.LOGIN_SCREEN} screenOptions={screenOptions}>
      <AuthStack.Screen
        name={SCREENS_NAME.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          title: 'screen_name.login_screen',
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  );
};
