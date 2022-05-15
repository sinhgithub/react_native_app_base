import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import setting from './settings';
import listJob from './listJob';
import system from './system';
import receiveJob from './receive_job';
import calendarWork from './calendar_work';
import wallets from './wallet';
import user from './user';
import masterData from './master_data';
import chat from './chat';
import notification from './notification';
import configSite from './configSite';
import employers from './employer';

const systemPersistConfig = {
  key: 'system',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isLogin', 'memberInfo'],
  version: 1.0
};

const settingPersistConfig = {
  key: 'setting',
  storage: AsyncStorage,
  whitelist: ['lang'],
  version: 1.0
};

const getListJobPersistConfig = {
  key: 'listJob',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const receiveJobPersistConfig = {
  key: 'receiveJob',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const calendarWorkPersistConfig = {
  key: 'saveJob',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const walletsPersistConfig = {
  key: 'wallets',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const masterDataPersistConfig = {
  key: 'masterData',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const chatPersistConfig = {
  key: 'chat',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const notificationPersistConfig = {
  key: 'notification',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const configSitePersistConfig = {
  key: 'configSite',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};
const employersPersistConfig = {
  key: 'employers',
  storage: AsyncStorage,
  whitelist: ['employers'],
  version: 1.0
};

export default combineReducers({
  system: persistReducer(systemPersistConfig, system),
  auth: persistReducer(authPersistConfig, auth),
  setting: persistReducer(settingPersistConfig, setting),
  listJob: persistReducer(getListJobPersistConfig, listJob),
  receiveJob: persistReducer(receiveJobPersistConfig, receiveJob),
  calendarWork: persistReducer(calendarWorkPersistConfig, calendarWork),
  wallets: persistReducer(walletsPersistConfig, wallets),
  user: persistReducer(userPersistConfig, user),
  masterData: persistReducer(masterDataPersistConfig, masterData),
  chat: persistReducer(chatPersistConfig, chat),
  notification: persistReducer(notificationPersistConfig, notification),
  configSite: persistReducer(configSitePersistConfig, configSite),
  employers: persistReducer(employersPersistConfig, employers)
});
