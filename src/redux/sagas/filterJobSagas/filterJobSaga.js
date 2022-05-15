import { filterJobSuccess, filterJobFailure } from 'src/redux/actions/system';
import { call, put } from 'redux-saga/effects';
import { apiListAllJob } from 'services/api/listJobApi';

export function* filterJobSaga(obj) {
  const {
    wage_from,
    wage_to,
    key,
    page,
    size,
    type,
    experience_level,
    province_id,
    success,
    failure,
    address,
    category_id
  } = obj.payload;
  try {
    const res = yield call(apiListAllJob, {
      wage_from,
      wage_to,
      key,
      page,
      size,
      province_id,
      type,
      experience_level,
      category_id
    });
    if (res.status === 200) {
      const data = { ...res.data };
      yield put(filterJobSuccess(data));
      const typeFilter = province_id
        ? 'province_id'
        : key
        ? 'key'
        : address
        ? 'address'
        : experience_level
        ? 'experience_level'
        : type
        ? 'type'
        : wage_from || wage_to
        ? 'wages'
        : category_id
        ? 'category_id'
        : 'none';
      success?.({ typeFilter, data });
    } else {
      yield put(filterJobFailure(res));
      failure?.();
    }
  } catch (error) {
    yield put(filterJobFailure(error));
    failure?.();
  }
}
