import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT, END_POINT_2 } = AppConfigs;

export const apiListJobHomePage = params => {
  const url = `${END_POINT}api/job?collection=HOME_PAGE`;
  return utils.get(url, params);
};

export const apiListAllJob = params => {
  const url = `${END_POINT}api/job`;
  return utils.get(url, params);
};

export const apiListFollowJob = params => {
  const url = `${END_POINT}api/job/follow`;
  return utils.get(url, params);
};

export const apiListApplyJob = params => {
  const url = `${END_POINT}api/job/job_seeker/apply`;
  return utils.get(url, params);
};

export const apiListAppliedJob = (params, callback) => {
  const url = `${END_POINT}api/job/job_seeker/received`;
  return utils.get(url, params, {}, callback);
};

export const apiFilterJob = params => {
  const url = `${END_POINT}api/job`;
  return utils.get(url, params);
};
