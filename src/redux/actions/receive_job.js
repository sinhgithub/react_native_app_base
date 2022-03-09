import { RECEIVE_JOB } from 'actionsType';

export const receiveJobHandle = payload => ({
  type: RECEIVE_JOB.RECEIVE_JOB.HANDLER,
  payload
});

export const receiveJobSuccess = payload => ({
  type: RECEIVE_JOB.RECEIVE_JOB.SUCCESS,
  payload
});

export const receiveJobFailure = payload => ({
  type: RECEIVE_JOB.RECEIVE_JOB.FAILURE,
  payload
});
