import { calendarWorkFailure, calendarWorkSuccess } from 'src/redux/actions/calendar_work';
import { call, put } from 'redux-saga/effects';
import { apiCalendarWork } from 'services/api/calendarWork';

export function* calendarWorkSaga(obj) {
  const { callback, failure, handleErr } = obj.payload;
  try {
    const res = yield call(apiCalendarWork, handleErr);
    if (res.status === 200) {
      yield put(calendarWorkSuccess(res.data));
      return callback?.();
    } else {
      yield put(calendarWorkFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(calendarWorkFailure(error));
    failure?.();
  }
}
