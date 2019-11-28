import { APIUrl } from '../../config';
import { put } from 'redux-saga/effects';
import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
    USER_SIGN_UP_ERROR,
    USER_SIGN_UP_SUCCESS
} from '../constants';
import { history } from '../../utils';
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
            localStorage.setItem('token', response.token);
            yield put({ type: USER_LOGIN_SUCCESS, payload: response });
            history.push('dashboard');
        }
    } catch (error) {
        yield put({ type: USER_LOGIN_ERROR, payload: error.message });
    }
}

export function* userSignUpSaga(action: AnyAction) {
    try {
        const { payload } = action;
        const signUpReq = yield fetch(`${APIUrl}/user/signup`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = yield signUpReq.json();

        if(response.status && response.status === 'error') {
            yield put({ type: USER_SIGN_UP_ERROR, payload: response.message });
        } else {
            localStorage.setItem('token', response.token);
            yield put({ type: USER_SIGN_UP_SUCCESS, payload: response });
            history.push('dashboard');
        }
    } catch(error) {
        yield put({ type: USER_SIGN_UP_ERROR, payload: error.message });
    }
}