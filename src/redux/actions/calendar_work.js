import { CALENDAR_WORK } from 'actionsType';

export const calendarWorkHandle = payload => ({
  type: CALENDAR_WORK.CALENDAR_WORK.HANDLER,
  payload
});

export const calendarWorkSuccess = payload => ({
  type: CALENDAR_WORK.CALENDAR_WORK.SUCCESS,
  payload
});

export const calendarWorkFailure = payload => ({
  type: CALENDAR_WORK.CALENDAR_WORK.FAILURE,
  payload
});

export const updateCalendarWorkHandle = payload => ({
  type: CALENDAR_WORK.UPDATE.HANDLER,
  payload
});

export const updateCalendarWorkSuccess = payload => ({
  type: CALENDAR_WORK.UPDATE.SUCCESS,
  payload
});

export const updateCalendarWorkFailure = payload => ({
  type: CALENDAR_WORK.UPDATE.FAILURE,
  payload
});
