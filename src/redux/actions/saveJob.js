import { SAVE_JOB } from 'actionsType';

export const saveJobHandle = payload => ({
  type: SAVE_JOB.SAVE_JOB.HANDLER,
  payload
});

export const saveJobSuccess = payload => ({
  type: SAVE_JOB.SAVE_JOB.SUCCESS,
  payload
});

export const saveJobFailure = payload => ({
  type: SAVE_JOB.SAVE_JOB.FAILURE,
  payload
});
