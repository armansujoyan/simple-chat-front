import { takeEvery } from 'redux-saga/effects';
import { userLoginSaga, userSignUpSaga, getUserSaga } from './user.saga';
import { USER_LOGIN_REQUEST, USER_SIGN_UP_REQUEST, GET_USER_REQUEST } from '../constants';

export function* watchUser() {
    yield takeEvery(USER_LOGIN_REQUEST, userLoginSaga);

    yield takeEvery(USER_SIGN_UP_REQUEST, userSignUpSaga);

    yield takeEvery(GET_USER_REQUEST, getUserSaga);
}