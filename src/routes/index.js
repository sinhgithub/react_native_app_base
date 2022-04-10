import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Indicator, AnimatedModal, CompleteModal, ConfirmModal } from 'components/';
import { CUSTOM_COLOR } from 'constants/colors';
import SCREENS_NAME from 'constants/screens';
import React, { Suspense, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { initLanguge } from 'src/i18n';
import { AppStackScreen } from './TabNavigator';
import AppLoading from 'components/AppLoading';
import { AuthStackScreen } from './AuthNavigator';
import { onAuthStateChanged, auth } from 'src/configs/firebase';
import { getListNotifyHandle, registerNotificationTokenHandle } from 'actions/notification';
import { getDeviceId } from 'react-native-device-info';
import { useNavigation } from '@react-navigation/core';
import { notificationManager } from 'services/notify/NotificationManager';
import { firebaseNotificationService } from 'services/notify/FirebaseNotificationService';
import { setTabIndexMessageBox } from 'actions/system';

const RootStack = createStackNavigator();

const RootStackScreen = props => {
  const { isLogin } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onRegister = fcmToken => {
    if (fcmToken) {
      dispatch(
        registerNotificationTokenHandle({
          params: {
            deviceId: getDeviceId(),
            token: fcmToken
          },
          success: () => {},
          failure: () => {},
          handleErr: () => {}
        })
      );
    }
  };
  const onNotification = notify => {
    const options = {
      soundName: 'default',
      playSound: true
    };
    notificationManager.showNotification(0, notify.title, notify.body, notify, options);
  };

  const onOpenNotification = notify => {
    dispatch(setTabIndexMessageBox(1));
    navigation.navigate(SCREENS_NAME.MESSAGE_BOX_SCREEN, {});
  };

  useEffect(() => {
    if (isLogin) {
      firebaseNotificationService.registerAppWithFCM();
      firebaseNotificationService.register(onRegister, onNotification, onOpenNotification);
    }
    return () => {
      firebaseNotificationService.unRegister();
    };
  }, [isLogin]);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <RootStack.Screen name={SCREENS_NAME.APP_STACK} component={AppStackScreen} />
      ) : (
        <RootStack.Screen name={SCREENS_NAME.AUTH_STACK} component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

const RootNavigator = props => {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  const { animatedBottomModal, completeModal, confirmModal } = useSelector(state => state.system);
  const { loading } = useSelector(state => state.auth);

  useEffect(() => {
    initLanguge();
  }, []);

  const renderSystemModal = () => {
    if (animatedBottomModal.isDisplay && animatedBottomModal.content) {
      return <AnimatedModal>{animatedBottomModal.content}</AnimatedModal>;
    }
    if (completeModal) {
      return <CompleteModal />;
    }
    if (confirmModal) {
      return <ConfirmModal />;
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name || '';
      }}
      onStateChange={async state => {}}>
      <Suspense
        fallback={
          <View style={styles.fallback}>
            <Indicator />
          </View>
        }>
        <>
          <SafeAreaProvider>
            <RootStackScreen {...props} />
            {renderSystemModal()}
          </SafeAreaProvider>
          <SafeAreaView style={styles.safeAreaView} edges={['bottom']} />
          {loading && <AppLoading loading={loading} />}
        </>
      </Suspense>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White
  },
  safeAreaView: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 0
  }
});

export default RootNavigator;
