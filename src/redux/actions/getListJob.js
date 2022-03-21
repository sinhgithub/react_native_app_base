import { GET_LIST_JOB } from 'actionsType';

export const getListJobHomePageHandle = payload => ({
  type: GET_LIST_JOB.HOME_PAGE.HANDLER,
  payload
});

export const getListJobHomePageSuccess = payload => ({
  type: GET_LIST_JOB.HOME_PAGE.SUCCESS,
  payload
});

export const getListJobHomePageFailure = payload => ({
  type: GET_LIST_JOB.HOME_PAGE.FAILURE,
  payload
});

export const getListAllJobHandle = payload => ({
  type: GET_LIST_JOB.ALL_JOB.HANDLER,
  payload
});

export const getListAllJobSuccess = payload => ({
  type: GET_LIST_JOB.ALL_JOB.SUCCESS,
  payload
});

export const getListAllJobFailure = payload => ({
  type: GET_LIST_JOB.ALL_JOB.FAILURE,
  payload
});

export const getListFollowJobHandle = payload => ({
  type: GET_LIST_JOB.FOLLOW_JOB.HANDLER,
  payload
});

export const getListFollowJobSuccess = payload => ({
  type: GET_LIST_JOB.FOLLOW_JOB.SUCCESS,
  payload
});

export const getListFollowJobFailure = payload => ({
  type: GET_LIST_JOB.FOLLOW_JOB.FAILURE,
  payload
});

export const getListApplyJobHandle = payload => ({
  type: GET_LIST_JOB.APPLY_JOB.HANDLER,
  payload
});

export const getListApplyJobSuccess = payload => ({
  type: GET_LIST_JOB.APPLY_JOB.SUCCESS,
  payload
});

export const getListApplyJobFailure = payload => ({
  type: GET_LIST_JOB.APPLY_JOB.FAILURE,
  payload
});

export const getListAppliedJobHandle = payload => ({
  type: GET_LIST_JOB.APPLIED_JOB.HANDLER,
  payload
});

export const getListAppliedJobSuccess = payload => ({
  type: GET_LIST_JOB.APPLIED_JOB.SUCCESS,
  payload
});

export const getListAppliedJobFailure = payload => ({
  type: GET_LIST_JOB.APPLIED_JOB.FAILURE,
  payload
});
