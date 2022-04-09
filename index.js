import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { Provider } from 'react-redux';
import storeConfig from './src/redux/store/index';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('setBackgroundMessageHandler', remoteMessage);
});
const Root = () => {
  return (
    <Provider store={storeConfig.store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
