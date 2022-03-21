import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import setting from './settings';
import listJob from './listJob';
import system from './system';
import receiveJob from './receive_job';
import calendarWork from './calendar_work';

const systemPersistConfig = {
  key: 'system',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: [],
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

export default combineReducers({
  system: persistReducer(systemPersistConfig, system),
  auth: persistReducer(authPersistConfig, auth),
  setting: persistReducer(settingPersistConfig, setting),
  listJob: persistReducer(getListJobPersistConfig, listJob),
  receiveJob: persistReducer(receiveJobPersistConfig, receiveJob),
  calendarWork: persistReducer(calendarWorkPersistConfig, calendarWork)
});
