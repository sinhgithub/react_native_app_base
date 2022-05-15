import { EMPLOYER } from 'actionsType';

export const getEmployerHandle = payload => ({
  type: EMPLOYER.GET_EMPLOYER.HANDLER,
  payload
});

export const getEmployerSuccess = payload => ({
  type: EMPLOYER.GET_EMPLOYER.SUCCESS,
  payload
});

export const getEmployerFailure = payload => ({
  type: EMPLOYER.GET_EMPLOYER.FAILURE,
  payload
});
// ================================================

export const getEmployerRecruitmentHandle = payload => ({
  type: EMPLOYER.GET_EMPLOYER_RECRUITMENT.HANDLER,
  payload
});

export const getEmployerRecruitmentSuccess = payload => ({
  type: EMPLOYER.GET_EMPLOYER_RECRUITMENT.SUCCESS,
  payload
});

export const getEmployerRecruitmentFailure = payload => ({
  type: EMPLOYER.GET_EMPLOYER_RECRUITMENT.FAILURE,
  payload
});
