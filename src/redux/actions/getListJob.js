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
