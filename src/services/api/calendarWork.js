import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const { END_POINT } = AppConfigs;

export const apiCalendarWork = (callback = () => {}) => {
  const url = `${END_POINT}api/calendar-work`;
  return utils.get(url, {}, {}, callback);
};

export const apiUpdateCalendarWork = (params, handleErr) => {
  // http://167.179.76.33:8086/api/calendar-work/user/changeState
  // payload:
  // {
  //   id: 1116
  // state: "CHECK_IN" // 'CHECK_OUT' // 'CANCLE'
  // time: "21:25:00"
  // }
  const url = `${END_POINT}api/calendar-work/user/changeState`;
  return utils.put(url, params, handleErr);
};
