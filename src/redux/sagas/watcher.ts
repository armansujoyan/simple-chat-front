import { takeEvery } from 'redux-saga/effects';
import { userLoginSaga, userSignUpSaga } from './user.saga';
import { USER_LOGIN_REQUEST, USER_SIGN_UP_REQUEST } from '../constants';

export function* watchUser() {
    yield takeEvery(USER_LOGIN_REQUEST, userLoginSaga);

    yield takeEvery(USER_SIGN_UP_REQUEST, userSignUpSaga);
}