import { put } from 'redux-saga/effects';
import { GET_CHAT_MESSAGES_ERROR, GET_CHAT_MESSAGES_SUCCESS } from '../constants';
import { APIUrl } from '../../config';
import { AnyAction } from 'redux';

export function* getChatMessagesSaga(action: AnyAction) {
    try {
        const { owner, reciever } = action.payload;
        const messageRequest = yield fetch(`${APIUrl}/message?owner=${owner}&reciever=${reciever}`, {
            headers: {
                'Authorization': localStorage.getItem('token') || ''
            }
        });

        const response = yield messageRequest.json();

        if(response.status && response.status === 'error') {
            yield put({ type: GET_CHAT_MESSAGES_ERROR, error: response.message });
        } else {
            yield put({ type: GET_CHAT_MESSAGES_SUCCESS, payload: response.messages });
        }
    } catch (error) {
        yield put({ type: GET_CHAT_MESSAGES_ERROR, error });
    }
}