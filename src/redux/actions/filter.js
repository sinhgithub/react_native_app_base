import { FILTER } from 'actionsType';

export const filterJobByList = payload => ({
  type: FILTER.FILTER_JOB_BY_LIST.ORIGIN,
  payload
});
