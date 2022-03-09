import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiReceiveJob = jobId => {
  const url = `${END_POINT}api/job/${jobId}/apply`;
  return utils.post(url);
};
