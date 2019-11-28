import { takeEvery } from 'redux-saga/effects';
import { userLoginSaga } from './user.saga';
import { USER_LOGIN_REQUEST } from '../constants';

export function* watchUser() {
    yield takeEvery(USER_LOGIN_REQUEST, userLoginSaga);
}