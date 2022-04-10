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

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
initLanguge();

const App = () => {
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
