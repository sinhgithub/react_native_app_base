import { getConfigSiteFailure, getConfigSiteSuccess } from 'src/redux/actions/configSite';
import { call, put } from 'redux-saga/effects';
import { apiConfigSite } from 'services/api/configSite';

export function* getConfigSiteSaga(obj) {
  const { success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiConfigSite, handleErr);
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(getConfigSiteSuccess(data));
      success?.();
    } else {
      yield put(getConfigSiteFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(getConfigSiteFailure(error));
    failure?.();
  }
}
