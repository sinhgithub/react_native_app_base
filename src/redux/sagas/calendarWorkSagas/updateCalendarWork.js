import {
  updateCalendarWorkFailure,
  updateCalendarWorkSuccess
} from 'src/redux/actions/calendar_work';
import { call, put } from 'redux-saga/effects';
import { apiUpdateCalendarWork } from 'services/api/calendarWork';

export function* updateCalendarWorkSaga(obj) {
  const { params, handleErr, callback, failure } = obj?.payload;
  try {
    const res = yield call(apiUpdateCalendarWork, params, handleErr);
    if (res.status === 200) {
      yield put(updateCalendarWorkSuccess(res.data));
      return callback?.();
    } else {
      yield put(updateCalendarWorkFailure(res));
      return failure?.();
    }
  } catch (error) {
    yield put(updateCalendarWorkFailure(error));
    failure?.();
  }
}
