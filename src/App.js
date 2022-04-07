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

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
initLanguge();

const App = () => {
  onAuthStateChanged(auth, user => {
    if (user?.uid) {
      firebaseSet(firebaseDatabaseRef(firebaseDatabase, `user/${user.id}`), {
        email: user.email,
        emailVerified: user.emailVerified,
        accessToken: user.accessToken
      });
    }
  });
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
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
