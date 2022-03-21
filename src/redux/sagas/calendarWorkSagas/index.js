import { CALENDAR_WORK } from 'actionsType';
import { takeLatest } from 'redux-saga/effects';
import { calendarWorkSaga } from './calendarWork';
import { updateCalendarWorkSaga } from './updateCalendarWork';

export default function* calendarWorkSagas() {
  yield takeLatest(CALENDAR_WORK.CALENDAR_WORK.HANDLER, calendarWorkSaga);
  yield takeLatest(CALENDAR_WORK.UPDATE.HANDLER, updateCalendarWorkSaga);
}
