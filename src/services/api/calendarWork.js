import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiCalendarWork = (callback = () => {}) => {
  const url = `${END_POINT}api/calendar-work`;
  return utils.get(url, {}, {}, callback);
};

export const apiUpdateCalendarWork = (params, handleErr) => {
  const url = `${END_POINT}api/calendar-work/user/changeState`;
  return utils.put(url, params, handleErr);
};
