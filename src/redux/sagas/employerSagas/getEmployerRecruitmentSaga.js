import {
  getEmployerRecruitmentFailure,
  getEmployerRecruitmentSuccess
} from 'src/redux/actions/employer';
import { call, put } from 'redux-saga/effects';
import { apiGetEmployerRecruitment } from 'services/api/employer';

export function* getEmployerRecruitmentSaga(obj) {
  const { params, success, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiGetEmployerRecruitment, params, handleErr);
    if (res.status === 200) {
      const data = res.data;
      yield put(getEmployerRecruitmentSuccess(data));
      success?.(data);
    } else {
      yield put(getEmployerRecruitmentFailure(res));
      failure?.(res);
    }
  } catch (error) {
    yield put(getEmployerRecruitmentFailure(error));
    failure?.(error);
  }
}
