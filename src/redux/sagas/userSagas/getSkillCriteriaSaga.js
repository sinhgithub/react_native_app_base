import { getSkillCriteriaFailure, getSkillCriteriaSuccess } from 'src/redux/actions/user';
import { call, put } from 'redux-saga/effects';
import { apiGetSkillCriteria } from 'services/api/user';

export function* getSkillCriteriaSaga(obj) {
  const { success, handleErr, failure } = obj.payload;
  try {
    const res = yield call(apiGetSkillCriteria, handleErr);
    if (res.status === 200) {
      yield put(getSkillCriteriaSuccess(res.data));
      return success?.();
    } else {
      yield put(getSkillCriteriaFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(getSkillCriteriaFailure(error));
    failure?.();
  }
}
