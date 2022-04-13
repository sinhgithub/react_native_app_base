import { getListJobHomePageFailure, getListJobHomePageSuccess } from 'src/redux/actions/getListJob';
import { call, put } from 'redux-saga/effects';
import { apiListJobHomePage } from 'services/api/listJobApi';

export function* getListJobHomePageSaga(obj) {
  try {
    const res = yield call(apiListJobHomePage);
    if (res.status === 200) {
      yield put(getListJobHomePageSuccess(res.data));
    } else {
      yield put(getListJobHomePageFailure(res));
    }
  } catch (error) {
    yield put(getListJobHomePageFailure(error));
  }
}
