import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import { Provider } from 'react-redux';
import storeConfig from './src/redux/store/index';

const Root = () => {
  return (
    <Provider store={storeConfig.store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
