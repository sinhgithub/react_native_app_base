import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Indicator, AnimatedModal, CompleteModal, ConfirmModal } from 'components/';
import { CUSTOM_COLOR } from 'constants/colors';
import SCREENS_NAME from 'constants/screens';
import React, { Suspense, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { initLanguge } from 'src/i18n';
import { AppStackScreen } from './TabNavigator';
import AppLoading from 'components/AppLoading';

const RootStack = createStackNavigator();

const RootStackScreen = props => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={SCREENS_NAME.APP_STACK} component={AppStackScreen} />
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
