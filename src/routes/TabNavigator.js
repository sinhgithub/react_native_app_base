import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { add, interpolate } from 'react-native-reanimated';
import SCREENS_NAME from 'constants/screens';
import { Text, View } from 'react-native';
import HomeScreen from 'screens/home';
import { ICON_SIZE } from 'constants/size';
import {
  ICHomeActive,
  ICHomeInActive,
  IFindJobActive,
  IFindJobInActive,
  ICWorkActive,
  ICWorkInActive,
  ICMessageActive,
  ICMessageInActive,
  ICProfileActive,
  ICProfileInActive
} from 'assets/icons';
import FindJobScreen from 'screens/find_job';
import MainTabbar from 'components/MainTabbar';
import WorkScreen from 'screens/work';
import MessageBoxScreen from 'screens/message_box';
import ProfileScreen from 'screens/profile';
import HomeHeader from 'components/HeaderHello';
import MainHeader from 'components/MainHeader';
import DetailJob from 'screens/detail_job';
import { useSelector } from 'react-redux';
import Login from 'screens/auth/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS_NAME.LOGIN_SCREEN}
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={SCREENS_NAME.LOGIN_SCREEN}
        component={Login}
        options={{
          title: 'screen_name.login_screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HomeHeader />,
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={'HOME_STACK'}
        component={HomeScreen}
        options={{
          title: 'screen_name.home',
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
};

const FindJobStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={'FIND_JOB_STACK'}
        component={FindJobScreen}
        options={{
          title: 'screen_name.find_job',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const WorkStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={'WORK_STACK'}
        component={WorkScreen}
        options={{
          title: 'screen_name.work_screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={'PROFILE_STACK'}
        component={ProfileScreen}
        options={{
          title: 'screen_name.profile_screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const MessageBoxStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config
        },
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={'MESSAGE_BOX_STACK'}
        component={MessageBoxScreen}
        options={{
          title: 'screen_name.message_box_screen',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS_NAME.HOME_SCREEN}
      tabBar={props => <MainTabbar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={SCREENS_NAME.HOME_SCREEN}
        component={HomeStack}
        options={({ route }) => ({
          tabBarLabel: 'tab_name.home',
          tabBarIcon: {
            active: <ICHomeActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />,
            inactive: <ICHomeInActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
          },
          key: 1
        })}
      />
      <Tab.Screen
        name={SCREENS_NAME.FIND_JOB_SCREEN}
        component={FindJobStack}
        options={({ route }) => ({
          tabBarLabel: 'tab_name.find_job',
          tabBarIcon: {
            active: <IFindJobActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />,
            inactive: <IFindJobInActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
          },
          key: 2
        })}
      />
      <Tab.Screen
        name={SCREENS_NAME.WORK_SCREEN}
        component={WorkStack}
        options={({ route }) => ({
          tabBarLabel: 'tab_name.work',
          tabBarIcon: {
            active: <ICWorkActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />,
            inactive: <ICWorkInActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
          },
          key: 3
        })}
      />
      <Tab.Screen
        name={SCREENS_NAME.MESSAGE_BOX_SCREEN}
        component={MessageBoxStack}
        options={({ route }) => ({
          tabBarLabel: 'tab_name.message_box',
          tabBarIcon: {
            active: <ICMessageActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />,
            inactive: <ICMessageInActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
          },
          key: 4
        })}
      />
      <Tab.Screen
        name={SCREENS_NAME.PROFILE_SCREEN}
        component={ProfileStack}
        options={({ route }) => ({
          tabBarLabel: 'tab_name.profile',
          tabBarIcon: {
            active: <ICProfileActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />,
            inactive: <ICProfileInActive width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
          },
          key: 5
        })}
      />
    </Tab.Navigator>
  );
};

export const AppStackScreen = () => {
  const { isLogin } = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      initialRouteName={isLogin ? SCREENS_NAME.MAIN_SCREEN : SCREENS_NAME.AUTH_STACK}
      screenOptions={{
        header: () => <MainHeader />,
        cardOverlayEnabled: true,
        transitionSpec: {
          open: config,
          close: config
        },
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
        headerStyleInterpolator: forHeaderFade
      }}>
      <Stack.Screen
        name={SCREENS_NAME.AUTH_STACK}
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS_NAME.MAIN_SCREEN}
        component={TabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
