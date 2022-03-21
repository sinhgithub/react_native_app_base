import { GET_LIST_JOB } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { getListJobHomePageSaga } from './getListJobHomePageSaga';
import { getListAllJobSaga } from './getListAllJob';
import { getListFollowJobSaga } from './getFollowJobs';
import { getListApplyJobSaga } from './getListApplyJob';
import { getListAppliedJobSaga } from './getListAppliedJob';

export default function* getListJobSaga() {
  yield takeLatest(GET_LIST_JOB.HOME_PAGE.HANDLER, getListJobHomePageSaga);
  yield takeLatest(GET_LIST_JOB.ALL_JOB.HANDLER, getListAllJobSaga);
  yield takeLatest(GET_LIST_JOB.FOLLOW_JOB.HANDLER, getListFollowJobSaga);
  yield takeLatest(GET_LIST_JOB.APPLY_JOB.HANDLER, getListApplyJobSaga);
  yield takeLatest(GET_LIST_JOB.APPLIED_JOB.HANDLER, getListAppliedJobSaga);
}
