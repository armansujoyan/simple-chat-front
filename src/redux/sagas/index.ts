import { fork } from 'redux-saga/effects';
import { watchUser } from './watcher';

export function* UserSaga() {
    yield fork(watchUser);
}