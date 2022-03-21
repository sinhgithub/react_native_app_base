import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiReceiveJob = (jobId, callback) => {
  const url = `${END_POINT}api/job/${jobId}/apply`;
  return utils.post(url, {}, {}, callback);
};
