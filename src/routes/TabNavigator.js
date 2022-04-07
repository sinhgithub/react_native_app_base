import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { add, interpolate } from 'react-native-reanimated';
import SCREENS_NAME from 'constants/screens';
import HomeScreen from 'screens/home';
import { ICON_SIZE } from 'constants/size';
import {
  ICMessageActive,
  ICMessageInActive,
  ICHomeNew,
  ICFindJobNew,
  ICWorkNew,
  ICAccountNew,
  ICMessageNew
} from 'assets/icons';
import FindJobScreen from 'screens/find_job';
import MainTabbar from 'components/MainTabbar';
import WorkScreen from 'screens/work';
import MessageBoxScreen from 'screens/message_box';
import ProfileScreen from 'screens/profile';
import HomeHeader from 'components/HeaderHello';
import MainHeader from 'components/MainHeader';
import HeaderTitleScreen from 'components/HeaderTitleScreen';
import DetailJob from 'screens/detail_job';
import FilterJobScreen from 'screens/filter_job';
import DetailProfile from 'screens/profile/detail';
import Income from 'screens/income';
import WithdrawRequestScreen from 'screens/withdraw_request';
import UpdateProfileScreen from 'screens/profile/update_profile';
import AddProfileScreen from 'screens/profile/add_profile';
import DetailChatScreen from 'screens/message_box/components/MessageTab/ChatDetail';
import { BACKGROUND_COLOR } from 'constants/colors';

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
            active: (
              <ICHomeNew
                width={ICON_SIZE.MEDIUM}
                height={ICON_SIZE.MEDIUM}
                color={BACKGROUND_COLOR.RedBasic}
              />
            ),
            inactive: (
              <ICHomeNew width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} color={'gray'} />
            )
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
            active: (
              <ICFindJobNew
                color={BACKGROUND_COLOR.RedBasic}
                width={ICON_SIZE.MEDIUM}
                height={ICON_SIZE.MEDIUM}
              />
            ),
            inactive: (
              <ICFindJobNew color="gray" width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
            )
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
            active: (
              <ICWorkNew
                color={BACKGROUND_COLOR.RedBasic}
                width={ICON_SIZE.MEDIUM}
                height={ICON_SIZE.MEDIUM}
              />
            ),
            inactive: <ICWorkNew color="gray" width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
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
            active: (
              <ICMessageNew
                color={BACKGROUND_COLOR.RedBasic}
                width={ICON_SIZE.MEDIUM}
                height={ICON_SIZE.MEDIUM}
              />
            ),
            inactive: (
              <ICMessageNew color="gray" width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
            )
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
            active: (
              <ICAccountNew
                color={BACKGROUND_COLOR.RedBasic}
                width={ICON_SIZE.MEDIUM}
                height={ICON_SIZE.MEDIUM}
              />
            ),
            inactive: (
              <ICAccountNew color="gray" width={ICON_SIZE.MEDIUM} height={ICON_SIZE.MEDIUM} />
            )
          },
          key: 5
        })}
      />
    </Tab.Navigator>
  );
};

export const AppStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS_NAME.MAIN_SCREEN}
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
        name={SCREENS_NAME.MAIN_SCREEN}
        component={TabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS_NAME.DETAIL_JOB_SCREEN}
        component={DetailJob}
        options={{ headerShown: true, header: () => <HeaderTitleScreen title={'Chi tiết'} /> }}
      />
      <Stack.Screen
        name={SCREENS_NAME.FILTER_JOB}
        component={FilterJobScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={SCREENS_NAME.DETAIL_PROFILE_SCREEN}
        component={DetailProfile}
        options={{
          headerShown: true,
          header: () => <HeaderTitleScreen title={'Hồ sơ chi tiết'} />
        }}
      />
      <Stack.Screen
        name={SCREENS_NAME.INCOME_SCREEN}
        component={Income}
        options={{
          headerShown: true,
          header: () => <HeaderTitleScreen title={'Thu nhập'} />
        }}
      />
      <Stack.Screen
        name={SCREENS_NAME.WITHDRAW_REQUEST}
        component={WithdrawRequestScreen}
        options={{
          headerShown: true,
          header: () => <HeaderTitleScreen title={'Yêu cầu rút tiền'} />
        }}
      />
      <Stack.Screen
        name={SCREENS_NAME.UPDATE_PROFILE_SCREEN}
        component={UpdateProfileScreen}
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen
        name={SCREENS_NAME.ADD_PROFILE_SCREEN}
        component={AddProfileScreen}
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen
        name={SCREENS_NAME.DETAIL_CHAT_SCREEN}
        component={DetailChatScreen}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  );
};
