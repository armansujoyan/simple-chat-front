import { fork } from 'redux-saga/effects';
import { watchUser, watchMessages } from './watcher';

export function* UserSaga() {
    yield fork(watchUser);
}

export function* MessageSaga() {
    yield fork(watchMessages);
}