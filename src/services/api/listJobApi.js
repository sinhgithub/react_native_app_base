import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiListJobHomePage = () => {
  const url = `${END_POINT}api/job?collection=HOME_PAGE`;
  return utils.get(url);
};

export const apiListAllJob = () => {
  const url = `${END_POINT}api/job`;
  return utils.get(url);
};

export const apiListAllJobByKey = key => {
  const url = `${END_POINT}api/job?key=${key}`;
  return utils.get(url);
};
