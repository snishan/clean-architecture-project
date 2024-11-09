import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsers } from '../../api/userApi';
import { fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';

function* handleFetchUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest('FETCH_USERS_REQUEST', handleFetchUsers);
}
