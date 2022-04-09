import React, { useEffect } from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { PersistGate } from 'redux-persist/integration/react';
import storeConfig from 'store/index';
import { initLanguge } from './i18n';
import RootNavigator from './routes';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { BACKGROUND_COLOR } from './constants/colors';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseDatabase, firebaseDatabaseRef, firebaseSet } from 'configs/firebase';
import { firebaseNotificationService } from 'services/notify/FirebaseNotificationService';
import { notificationManager } from 'services/notify/NotificationManager';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
initLanguge();

const App = () => {
  const onRegister = () => {
    console.log('onRegister');
  };
  const onNotification = notify => {
    console.log('onNotification');
    const options = {
      soundName: 'default',
      playSound: true
    };
    notificationManager.showNotification(0, notify.title, notify.body, notify, options);
  };
  const onOpenNotification = notify => {
    console.log('onOpenNitification');
  };

  useEffect(() => {
    firebaseNotificationService.registerAppWithFCM();
    firebaseNotificationService.register(onRegister, onNotification, onOpenNotification);

    setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    return () => {
      console.log('unRegister');
      firebaseNotificationService.unRegister();
      notificationManager.unRegister();
    };
  }, []);

  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={BACKGROUND_COLOR.White} />
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <RootNavigator />
        </PersistGate>
      </SafeAreaView>
    </RootSiblingParent>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
