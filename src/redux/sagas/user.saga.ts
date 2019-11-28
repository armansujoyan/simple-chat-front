import { APIUrl } from '../../config';
import { put } from 'redux-saga/effects';
import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from '../constants';
import { AnyAction } from 'redux';

export function* userLoginSaga(action: AnyAction) {
    try {
        const { payload } = action;
        const signInReq = yield fetch(`${APIUrl}/user/signin`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = yield signInReq.json();

        if(response.status && response.status === 'error') {
            yield put({ type: USER_LOGIN_ERROR, payload: response.message });
        } else {
            yield put({ type: USER_LOGIN_SUCCESS, payload: response });
        }
    } catch (error) {
        yield put({ type: USER_LOGIN_ERROR, payload: error.message });
    }
}