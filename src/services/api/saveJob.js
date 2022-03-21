import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiSaveJob = (jobId, callback = () => {}) => {
  const url = `${END_POINT}api/job/follow/${jobId}`;
  return utils.post(url, {}, {}, callback);
};
